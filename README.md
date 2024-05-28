# text-insert-abtest
Chrome extension that will insert text into a text box where the cursor is on a web page, and will allow a very simple A/B testing by inserting 2 alternating templates. 

## Load the extension in Chrome
Open Chrome and navigate to the Extensions page:

Type chrome://extensions/ in the address bar and press Enter.
Enable Developer Mode:

In the top right corner of the Extensions page, toggle the switch to enable Developer Mode.
Load Unpacked Extension:

Click the "Load unpacked" button.
In the file dialog that opens, navigate to the directory where your extension files are located and select that folder.

ONE DAY CHALLENGE!! It is 11:21 am Eastern Daylight Time. I will try leveraging GPT 4o and GitHub Copilot to create the following by the end of the day today. I need a Chrome plug-in that allows me to store text templates that insert text into a text box on a web page. When clicked, it will create a pop-up and allow me to select a single template to place into the text box, OR it will allow me to toggle an A/B test that will take two selections and run an A/B test until the toggle is turned off. Bookmark this and follow me to see if I make it, or it blows "Bomb")up on me!!

#### Step 1 - create a GitHub repo and clone it locally.
Major interruption 1.
Also added .gitignore for Webstorm and Java Start: 11:24am EDT.
End: 11:41pm EDT

#### Step 2 - Create a WebStorm Project and configure WebStorm.

In addition to creating the WS project, did a little initial visualization of the pop-up, and started crafting initial GPT 4o prompt.

I am using NextChat with GPT 4o API for logging the chat session since it supports markdown and handles code nicely.

Start: 11:41 pm EDT
Stop: 12:00 pm EDT

#### Step 3 - Create and execute initial prompt

Start: 12:00 pm EDT
Stop:  12: 34 pm EDT

#### Step 4 - Add generated code to WebStorm and take care of any problems.

There were a couple of problems - but they were all warnings. Mostly to do with the fact that the project is for a Chrome extension so WebStorm needed context for the chrome object. This can be added as shown by this Stack Overflow "Update 2 Answer" in the following answer to the question:

https://stackoverflow.com/questions/13997468/how-do-i-use-webstorm-for-chrome-extension-development

After taking care of that, and clearing some warnings that could have been ignored. I am ready to do an initial test of the project.

Breaking now for a bite to eat.

Start: 12:34 pm EDT
Stop: 1:20 pm EDT

#### Step 5 - Initial Extension Test.

SUCCESS!!

The pop-up seemed to work. Along with the add template pop-up.

And then it properly injected the template text into the text box for non A/B test.

It also properly handled the alternating injection from the A/B testing.

Start: 1:35 pm EDT
Stop: 1:50 pm EDT