export const categories = [
  "All",
  "Business Analysis",
  "Technical Documentation",
  "Creative Content",
  "Data Analysis",
  "Code Generation",
  "Customer Support",
  "Research",
  "Marketing",
];

export const templates = [
  {
    id: "strategic-business-analysis-framework",
    title: "Strategic Business Analysis Framework",
    description:
      "Comprehensive prompt for analyzing business opportunities, market positioning, and competitive landscape with actionable insights.",
    category: "Business Analysis",
    usageCount: 12847,
    lastUpdated: "2 days ago",
    performance: 94,
    tags: ["strategy", "analysis", "framework", "business"],
    prompt:
      "Analyze the current market positioning of [Company/Product] by evaluating its strengths, weaknesses, opportunities, and threats (SWOT analysis). Identify the target audience, key competitors, and market trends. Based on this analysis, propose three strategic initiatives to improve its market share and provide a rationale for each.",
  },
  {
    id: "technical-api-documentation-generator",
    title: "Technical API Documentation Generator",
    description:
      "Generate clear, comprehensive API documentation with examples, error codes, and best practices for developer onboarding.",
    category: "Technical Documentation",
    usageCount: 8392,
    lastUpdated: "1 week ago",
    performance: 97,
    tags: ["api", "documentation", "technical", "developers"],
    prompt:
      "Generate complete API documentation for an endpoint that does the following: [Describe endpoint functionality]. Include sections for the endpoint URL, HTTP method, request parameters (with data types and descriptions), a sample request body in JSON, a sample successful response (200 OK), and a list of possible error responses with their status codes and meanings.",
  },
  {
    id: "creative-campaign-ideation-engine",
    title: "Creative Campaign Ideation Engine",
    description:
      "Brainstorm innovative marketing campaigns with target audience analysis, creative concepts, and execution strategies.",
    category: "Creative Content",
    usageCount: 15621,
    lastUpdated: "3 days ago",
    performance: 91,
    tags: ["creative", "marketing", "campaigns", "ideation"],
    prompt:
      "Brainstorm three distinct and innovative marketing campaign concepts for a new [Product Type] called [Product Name]. For each concept, define the target audience, the core message, key channels (e.g., social media, content marketing, paid ads), and a unique hook or call-to-action.",
  },
  {
    id: "data-insights-and-visualization-prompt",
    title: "Data Insights and Visualization Prompt",
    description:
      "Transform raw data into meaningful insights with statistical analysis, trend identification, and visualization recommendations.",
    category: "Data Analysis",
    usageCount: 9734,
    lastUpdated: "5 days ago",
    performance: 96,
    tags: ["data", "analysis", "insights", "visualization"],
    prompt:
      "You are provided with a dataset containing [describe dataset columns and context]. Analyze this data to identify key trends, correlations, and anomalies. Summarize your findings in three bullet points. Then, recommend two types of visualizations (e.g., bar chart, scatter plot) that would effectively communicate these findings and explain why.",
  },
  {
    id: "code-review-and-optimization-assistant",
    title: "Code Review and Optimization Assistant",
    description:
      "Comprehensive code review focusing on performance, security, maintainability, and best practices implementation.",
    category: "Code Generation",
    usageCount: 21456,
    lastUpdated: "1 day ago",
    performance: 98,
    tags: ["code", "review", "optimization", "security"],
    prompt:
      "Review the following [Language] code snippet for a function that [describe function's purpose]. Provide a detailed analysis covering potential performance bottlenecks, security vulnerabilities (like [mention specific vulnerability type, e.g., SQL injection]), and violations of best practices. Suggest specific code modifications to address these issues. \n\n[Paste Code Here]",
  },
  {
    id: "customer-support-resolution-framework",
    title: "Customer Support Resolution Framework",
    description:
      "Handle complex customer inquiries with empathy, technical accuracy, and clear resolution pathways.",
    category: "Customer Support",
    usageCount: 7892,
    lastUpdated: "4 days ago",
    performance: 93,
    tags: ["support", "customer", "resolution", "communication"],
    prompt:
      "Craft a polite and empathetic customer support response to the following user complaint: [Paste customer complaint here]. Your response should acknowledge the user's frustration, provide a clear explanation of the issue (or a timeline for its resolution), and offer a specific next step or a goodwill gesture.",
  },
  {
    id: "academic-research-assistant",
    title: "Academic Research Assistant",
    description:
      "Summarize complex research papers, generate literature reviews, and formulate hypotheses for academic studies.",
    category: "Research",
    usageCount: 6103,
    lastUpdated: "1 week ago",
    performance: 95,
    tags: ["research", "academic", "literature", "summary"],
    prompt:
      "Read and summarize the key findings, methodology, and conclusions of the following research paper: [Paste abstract or link to paper]. Then, based on its findings, formulate two novel research questions or hypotheses for future studies in this area.",
  },
  {
    id: "social-media-marketing-blitz",
    title: "Social Media Marketing Blitz",
    description:
      "Create a complete social media campaign, including post copy, image suggestions, and engagement strategies.",
    category: "Marketing",
    usageCount: 11047,
    lastUpdated: "2 days ago",
    performance: 92,
    tags: ["marketing", "social media", "campaign", "content"],
    prompt:
      "Generate a one-week social media content calendar to promote [Product/Event]. Include daily post copy for Twitter, Instagram, and LinkedIn. For each post, suggest a relevant image or video concept and a call-to-action. Include a mix of promotional, educational, and engaging content.",
  },
  {
    id: "python-code-generator-for-data-science",
    title: "Python Code Generator for Data Science",
    description:
      "Generate Python scripts for data cleaning, analysis, and machine learning model implementation with pandas and scikit-learn.",
    category: "Code Generation",
    usageCount: 18345,
    lastUpdated: "6 hours ago",
    performance: 99,
    tags: ["python", "code", "data science", "machine learning"],
    prompt:
      "Write a Python script using pandas to load a CSV file named 'data.csv'. The script should then perform the following data cleaning steps: [List cleaning steps, e.g., 'remove rows with missing values in the 'price' column', 'convert the 'date' column to datetime objects']. Finally, calculate the mean of the '[column_name]' column.",
  },
  {
    id: "market-expansion-strategy",
    title: "Market Expansion Strategy",
    description:
      "Develop a detailed market expansion plan, including target market analysis, entry strategy, and financial projections.",
    category: "Business Analysis",
    usageCount: 8821,
    lastUpdated: "8 days ago",
    performance: 94,
    tags: ["business", "strategy", "market expansion", "finance"],
    prompt:
      "Create a market expansion strategy for [Your Company] to enter the [Target Market, e.g., 'European'] market. The strategy should include a PEST (Political, Economic, Social, Technological) analysis of the new market, a recommended market entry strategy (e.g., exporting, joint venture), and a high-level financial projection for the first three years.",
  },
  {
    id: "seo-optimized-blog-post-creator",
    title: "SEO-Optimized Blog Post Creator",
    description:
      "Write engaging, SEO-friendly blog posts with keyword optimization, meta descriptions, and compelling headlines.",
    category: "Creative Content",
    usageCount: 13888,
    lastUpdated: "4 days ago",
    performance: 93,
    tags: ["seo", "blogging", "content creation", "writing"],
    prompt:
      "Write a 500-word SEO-optimized blog post on the topic of '[Your Topic]'. The primary keyword is '[Your Keyword]'. Include a compelling title, a meta description under 160 characters, and use the primary keyword in the first paragraph and at least one subheading. The tone should be [e.g., informative, conversational, professional].",
  },
  {
    id: "user-manual-faq-generator",
    title: "User Manual & FAQ Generator",
    description:
      "Automatically create comprehensive user manuals and frequently asked questions for software applications.",
    category: "Technical Documentation",
    usageCount: 5231,
    lastUpdated: "10 days ago",
    performance: 96,
    tags: ["documentation", "user manual", "faq", "technical writing"],
    prompt:
      "Generate a set of 5 frequently asked questions (FAQs) for a software feature that [describe the feature's function]. For each question, provide a clear and concise answer. The questions should cover common user problems or points of confusion.",
  },
];
