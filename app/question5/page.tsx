export default function Page() {
    return <h1>A customer has a project on Vercel and they want to redirect the /blog path to another website. <br></br>Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.<br></br>
    Imagine that the customer from Question 4 responds with the following email. 
    <br></br>
    “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions.”
    <br></br>
    What response would you write back?
    <br></br>
    
   

    <br></br>
Dear [Customer],
<br></br>

I'm sorry to hear that you're feeling frustrated with your project. I understand how important it is for some websites not to be indexed by search engines.I understand that you want your project to remain unindexed by search engines. To achieve this, you can use the "robots.txt" file in your project to give instructions to web crawlers. Here's how you can do it:
<br></br>
Create a "robots.txt" file in the root of your project.<br></br>
Add the following lines to the file:<br></br>
<br></br>

User-agent: *<br></br>
Disallow: /
<br></br>
<br></br>
These lines instruct web crawlers not to index any content on your site. However, note that some search engines may still choose to index your site despite these instructions.
<br></br>
Make sure to deploy the updated project with the "robots.txt" file, and it should help prevent search engines from indexing your content.
<br></br>
Documentation:<br></br>

Robots.txt Specifications<br></br>
Feedback/Information:<br></br>
<br></br>
The "robots.txt" method is a widely accepted way to control web crawlers' access to your site.<br></br>
Keep in mind that while most search engines respect "robots.txt" instructions, it's not a foolproof method, and some may choose to ignore them.<br></br>
I hope this helps! If you have any further questions or encounter any issues, please feel free to ask.<br></br>
<br></br>
Best regards,<br></br>

Preet
    </h1>
 }
 