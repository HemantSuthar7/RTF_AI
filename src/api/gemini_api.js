import {GoogleGenerativeAI} from "@google/generative-ai"
import { configDotenv } from "dotenv";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const generateResponse = async ({query, response}) => {

    let prompt = `Analyze the following sales pitch: \n Customer Query: ${query} \n User Response: ${response} \n Provide short 2 line feedback on tone, clarity, and suggestions(with examples) . RETURN ME THE RESPONSE ENCLOSED WITHIN RELEVANT TAGS, USING HTML ENTITIES FOR SPECIAL CHARACTERS TO ENSURE CORRECT PARSING AND DO NOT INCLUDE 'HTML' OR 'DIV' TAGS, BUT INCLUDE 'br' tags between the Tone, Clarity & Suggestions parts. I JUST NEED TO POPULATE THIS IN AN EXISTING CARD DIV. THIS IS AN EXAMPLE FORMAT OF HOW YOU SHOULD RETURN ME (<p><strong>Tone:</strong> The tone is too passive and lacks persuasive power;  it needs more energy and benefit-driven language.</p>
     <p><strong>Clarity:</strong> The statement is vague and doesn't highlight unique selling points;  more detail is needed to differentiate the product.</p> 
     <p><strong>Suggestions:</strong>  Use stronger verbs and focus on benefits, e.g., &quot;It revolutionizes task management, boosting productivity by automating workflows and improving team communication!&quot; or  &quot;Conquer your to-do list with our intuitive platform – experience seamless task organization and effortless collaboration!&quot;</p>)`

     let prompt2 = `Prompt for LLM Integration:

You are an AI assistant integrated into a sales web application, designed to analyze mock customer queries and sales user responses. Your task is to provide real-time feedback on the following aspects:

Tone Analysis: Assess whether the tone used by the sales user is professional, empathetic, and engaging. Identify areas where the tone can be improved.
Content Review: Evaluate the response for clarity, relevance, and completeness. Highlight any gaps in the information provided or if the query is not fully addressed.
Approach Suggestions: Recommend improvements to the approach taken by the sales user to ensure better engagement and resolution of the customer query.
Additionally, provide examples or alternative phrasing that improve the sales user’s response.

Output Format
Return your feedback in plain text HTML-encoded elements that can be directly parsed into the web app. The format should be:

<p><strong>Tone Feedback:</strong> [Tone analysis feedback]</p>
<p><strong>Content Feedback:</strong> [Content analysis feedback]</p>
<p><strong>Suggestions:</strong> [Suggestions for improvement]</p>
<p><strong>Example Response:</strong> [Improved response example]</p>

Example Input:
{
  "customer_query": "I am looking for a cloud-based solution for my small business. Can you help?",
  "user_response": "We have cloud solutions. Check our website for details."
}

Example Output:
<p><strong>Tone Feedback:</strong> The tone is too generic and lacks warmth or engagement. Consider being more welcoming.</p>
<p><strong>Content Feedback:</strong> The response is vague and does not directly address the customer’s query.</p>
<p><strong>Suggestions:</strong> Personalize the response and provide a direct call to action or link to relevant information.</p>
<p><strong>Example Response:</strong> "Thank you for reaching out! We offer tailored cloud-based solutions for small businesses. I’d be happy to provide more details or assist you in finding the right option for your needs. Here's a link to explore: [Insert Link]."</p>

Ensure your responses are concise, actionable, and in the specified format to maintain consistency in the web application.

Also do not forget to include <br> tags in between the sections, like a <br> tag after the <p> tag. Also keep the overall length ideal, not too big. DO NOT INCLUDE THE HTML MENTION IN THE RESPONSE but do not forget to include relevant br tags  .

Now Finally here is the Customer Query : ${query} and the user response: ${response}.
`

    try {
        const result = await model.generateContent(prompt2);
        console.log(result.response.text());
        return result.response.text();
    } catch (error) {
        console.log("Error while generating response from gemini : ", error)
    }
}

export{
    generateResponse
}