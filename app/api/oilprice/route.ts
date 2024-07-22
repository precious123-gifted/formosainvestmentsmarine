import { NextRequest, NextResponse } from "next/server";
import Cheerio from "cheerio";

interface OilProduct {
  title: string;
  price: string;
  percentage: string;
  unit: string;
  date: string;
}

async function scrapeOilData(): Promise<OilProduct[]> {
  try {
    const OilData: OilProduct[] = [];

    const response = await fetch(
      "https://markets.businessinsider.com/commodities/oil-price"
    ); // Update URL if needed
    const html = await response.text();
    const $ = Cheerio.load(html);

    // Scrape oil data logic... (same as before)

    $('.table__tr').each((i, product) => {
      const title = $(product).find('.table__td a').text().trim();
      const price = $(product).find('.table__td:nth-child(3)').text().trim();
      const percentage = $(product).find('.table__td:nth-child(5)').text().trim();
      const unit = $(product).find('.table__td:nth-child(6)').text().trim();
      const date = $(product).find('.table__td:nth-child(7)').text().trim();

      // Create product data only if any value is present and title is not empty
      if (title && (price || percentage || unit || date)) {
        const productData: OilProduct = {
          title,
          price,
          percentage,
          unit,
          date,
        };
        OilData.push(productData);
      }
    });

    return OilData; // Return array of OilProduct objects
  } catch (error) {
    console.error('Error scraping oil data:', error);
    throw error; // Re-throw error for handling in API route
  }
}

export async function GET(request: NextRequest) {
    try {
      const OilData: OilProduct[] = await scrapeOilData();
      return NextResponse.json(OilData); // Return scraped data as JSON response
    } catch (error) {
      console.error('Error scraping oil data:', error);
      return new Response('Error fetching oil data.', { status: 500 }); // Send error response
    }

}
