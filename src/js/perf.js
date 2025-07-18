var key = "AIzaSyCDYDqYY9c0yqonUa2VYPEaGHy-WB3CJ4g";

async function run() {
  const apiEndpoint =
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const targetUrl = `https://www.dallasgale.dev/`;

  const url = new URL(apiEndpoint);
  url.searchParams.set("url", targetUrl);
  url.searchParams.set("key", key);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();

    console.log(`Page tested: ${json.id}`);

    // Check if loadingExperience exists before accessing it
    if (json.loadingExperience && json.loadingExperience.metrics) {
      console.log("Chrome User Experience Report Results:");
      const cruxMetrics = {
        "First Contentful Paint":
          json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS?.category ||
          "No data",
        "Interaction to Next Paint":
          json.loadingExperience.metrics.INTERACTION_TO_NEXT_PAINT?.category ||
          "No data",
      };
      console.log(cruxMetrics);
    } else {
      console.log("Chrome User Experience Report: No real user data available");
    }

    const lighthouse = json.lighthouseResult;
    const lighthouseMetrics = {
      "Performance Score": Math.round(
        lighthouse.categories.performance.score * 100
      ),
      "First Contentful Paint":
        lighthouse.audits["first-contentful-paint"]?.displayValue || "No data",
      "Speed Index":
        lighthouse.audits["speed-index"]?.displayValue || "No data",
      "Largest Contentful Paint":
        lighthouse.audits["largest-contentful-paint"]?.displayValue ||
        "No data",
      "Total Blocking Time":
        lighthouse.audits["total-blocking-time"]?.displayValue || "No data",
      "Time To Interactive":
        lighthouse.audits["interactive"]?.displayValue || "No data",
    };

    console.log("Lighthouse Results:");
    console.log(lighthouseMetrics);
  } catch (error) {
    console.error("Fetching PageSpeed Insights failed:", error);
  }
}

run();
