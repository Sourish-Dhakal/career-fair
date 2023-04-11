let dbLessons = [
    {
        'Name':'Chapter 1: How to Open Code',
        'lessons':[
            {
                "Name":"Getting Familiar with Code Editors",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn about different code editors and how to open them in this lesson.",
                "content":"When making a website, there are multiple ways to start the creation of it. There are various code editors you can use to start the development of your code. You can use the notepad app, you can also use <a href=”https://code.visualstudio.com/download”>Visual Studio Code</a> that is it\'s own code editor. For our lessons, we will use our own code editor. The one that\'s embed in this website. But, if you want to do code beyond the lessons on here, you can download visual studio code and paste the code there or you can open notepad and paste the code there. But after putting the code in those code editors how do you open it? We will use notepad as the example. Open the notepad app, we don\'t need to put any code in there right now but you can paste \"<code>h1</code>Sample Code<code>/h1</code>\" (Only the stuff in the quotation marks). To see what this code does, you can also paste it into the HTML part of the code editor below (in this website). This is how our code starts, with a code editor. Visual studio code is the most used but notepad and our code editor will work for now.",
                "thumbnail_image_url":"../images/1.1.png",
                "image_url":"../images/1.1.png"
            },
            {
                "Name":"Saving Our Code",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to open up the code from the code editors and see the results of our code.",
                "content":"If you use visual studio code or notepad, you will need to save the file to be able to open it. In the last lesson, we had pasted paste <code>h1</code>Sample Code<code>/h1</code> into notepad. We will now save it. Press File, then Save. Now choose a folder you want to put it in. <b>BUT before you save it in that folder, create a name for the file. Then, make it end in 'html'. This lets the computer know it's an HTML file. </b>Now on file explorer, find the folder you put it in. You should see a file with the name that you gave the notepad. It should have an icon of the web browser you set as the main one. Press it twice, and it should open the file in your web browser. This is the output:",
                "thumbnail_image_url":"../images/1.2.png",
                "image_url":"../images/1.2.png"
            },
            {
                "Name":"Starting the Structure of the Website",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how the basic structure of a website works and the different programming languages that go into creating websites.",
                "content":"There are multiple languages required to building a good looking and functioning website. Each are equally important in making the website and we will go in order. <ul><li><b>HTML: </b> Hyper-Text Markup Language are used to create the base of the website. Putting all the information in the website.</li> <li><b>CSS: </b> Cascading StyleSheets are used to style the HTML elements and make them look good and appealing to the eye.</li> <li><b>JS: Javascript is used to make the website function and connect to the back-end. It can do the small things that really mean a lot like making elements disappear and validating forms. </b></li></ul> <br>But how do we tell the computer which coding language to use? For this, we will first open notepad. We will now write <code>html</code> and <code>/html</code> tags. What do these tags mean? These tags tell the computer we want to build a website using HTML as the main code. Next, inside the html tags we will put <code>head</code> and <code>/head</code> tags. These define everything that you don't see on the screen. Like the CSS, the title of the webpage, the image that shows next to the title. Next, after the head tags and inside the html tags, we will put <code>body</code> and <code>/body</code> tags. These specify the actual part of the website that you put on the webpage. We will teach how to add CSS and Javascript in the next lesson but your code should look like this:",
                "thumbnail_image_url":"../images/1.3.png",
                "image_url":"../images/1.3.png"
            },
            {
                "Name":"Adding CSS and Javascript",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We've learnt the basic structure of websites in the last class, we will now learn how to link CSS and Javascript into our HTML file. ",
                "content":"We had added html, head and body tags in the last lesson but didn't get to adding CSS and JavaScript files. There are two ways you can use CSS and JavaScript. Internal and External. To use Internal CSS, we just simply put <code>style</code>, <code>/style</code> tags inside the head tags and now we can put CSS code in there. To use external CSS, we create another file with a .css file extension instead of .html and then to link it to this HTML document, we have to write <code>link ref=”stylesheet” href=”(File Location Of Your CSS File)”</code> inside the head tags. Now we have connected CSS, to connect JavaScript, we need to use different tags. We use <code>script</code> and <code>/script</code> inside the body tag to add JavaScript. Now you can put code in it right now to use internal JavaScript but you can also make it external by writing src=”(File Location Of Your JavaScript File)” inside the opening script tag. ref tells the computer what type of file the computer has been linked to is. href and src tell the computer where to get the file. They are called attributes as they aren't tags but instead modify the tags. Here is an example of external CSS and JS linking: ",
                "thumbnail_image_url":"../images/1.4.png",
                "image_url":"../images/1.4.png"
            }
        ]
    },
    {
        'Name':'Chapter 2: Introduction to Programming',
        'lessons':[
            {
                "Name":"Headings and Paragraphs",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to put text in our website and the different levels of text. We will also learn the heading heirachy.",
                "content":"This time, we will actually learn how to code. We will learn how to create headings and paragraphs in this lesson. What is the importance of headings and paragraphs? It tells the computer that you created a heading/paragraph and the level of importance of the heading/paragraph. You can add text with these elements. To open it, we can use the <code>h1</code> tag. To close it we can use the <code>/h1</code> tag. Inside these tags, we can put any text we want and it will display it. In the text editor before, try using the h1 tags. The headings go in 6 levels, 1 - 6 from greatest to least. h1 is the biggest heading, and h6 is the smallest. Paragraphs work the same except instead of writing h1, h2, h3, h4, h5 or h6, you write <code>p</code>. Try testing out the different headings and paragraphs. The photo will show all the headings and paragraphs.",
                "thumbnail_image_url":"../images/2.1.png",
                "image_url":"../images/2.1.png"
            },
            {
                "Name":"Text Styling",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to bold, underline, slant and more to text.",
                "content":"Last time we learnt how to create headings and paragraphs, now we will learn how to style the text in html. If we want to bold the text, we can surround the text by <code>b</code> and <code>/b</code> or <code>strong</code> and <code>/strong</code>. Both of them do the same thing, bold the text that's in them. To set a text to italics, you can use <code>i</code> or <code>em</code>. To strikethrough you can use <code>s</code> and <code>del</code>. To bring text a little higher or lower you can use <code>sup</code> and <code>sub</code> respectively. To underline text, surround it with <code>u</code>. Now try out all of them, we'll have examples of it here too.",
                "thumbnail_image_url":"../images/2.2.png",
                "image_url":"../images/2.2.png"
            },
            {
                "Name":"Cool Text Things",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to put a link to another page, create abbreviations and create quotes in this lesson.",
                "content":"Today we will learn how to create links to other websites and abbreviations. We will also learn how to add quotes in html. To add link to another website, we do <code>a href=”(Insert link to webpage)”</code>Insert Text<code>/a</code> 'a' stands for 'anchor will means anchor to another webpage. href means the link goes to the webpage that you will go to. You can put a Wikipedia page or something and when you click on the link it will lead you there. Next is abbreviations. To do this, we can use <code>abbr title=”(What does the abbrievation mean)”</code><code>/abbr</code>. You can set anything to an abbreviation with this. Finally, quotations. It's like the ones from the last lesson. <code>q</code>Insert Quote<code>/q</code>. There's something called div's which are like boxes that you can group code in. <code>div</code><code>/div</code> are the tags you use.",
                "thumbnail_image_url":"../images/2.3.png",
                "image_url":"../images/2.3.png"
            },
            {
                "Name":"Images",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to create and resize images.",
                "content":"This class we will learn how to create images and tables. First of all images, this should be a very simple topic. <code>img src=”(insert link to image)”</code> is how you make images. You don't need to close images because images are cool like that. The src attribute tells the element where to get the image from. To change the width and height of the image, you can add more attributes. <code>img src=”” width=”500px” height=”500px”</code> creates an image with width of 500px and height of 500px. That's how you create images and resize it. Here's the image link I used in the example: https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
                "thumbnail_image_url":"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
                "image_url":"../images/2.4.png"
            },
            {
                "Name":"Tables",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to create a table and it's rows and cells.",
                "content":"This lesson we will learn about the table's hierarchy. To create a table, we start with the <code>table</code> and <code>/table</code> tags. This tells the computer that we're creating a table and that the <code>table</code> tag is where it starts and the <code>/table</code> tag is where it ends. Next, in a table we have rows and columns. Both the rows and columns create the elements in the table. To create a row, we need to write <code>tr</code> and <code>/tr</code> tr stands for table row. You can make as many table rows as you want. Now, if you want to make a cell or a box inside the table, you have to put <code>td</code> and <code>/td</code> in the <code>tr</code> tag. td stands for table data which would hold all the things you want in one cell of the table.",
                "thumbnail_image_url":"../images/2.5.png",
                "image_url":"../images/2.5.png"
            },
            {
                "Name":"CSS Selectors",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will be introduced to CSS and how to select HTML items.",
                "content":"CSS is what we can use to style our code. It looks pretty plain and boring what we have made so far so let's do some things with CSS. First we have to open up the CSS box to type our CSS. Now, how would we call a specific item into the CSS box? There are three ways, if you want to do that specific element and no other, you can use id. Use it like an attribute, <code>h1 id=”(Whatever You Want Your Id to be)”</code>. How would that look like? If you want to create an h1 with the id name 'Title' you would call it: <code>h1 id=”Title”</code>(Insert Text You Want)<code>/h1</code>. Think of Id as a name for your element. There's another way to call something where you can give it to multiple elements. Class, think of class as a family of elements that you can apply the same styles to. You can have multiple paragraphs and headings with the same class but you can only have one paragraph or one heading with one id. These are called selectors. You can add selectors on any element, not just paragraphs and headings by the way. Now, if you wanted to add a style to all elements with the same name, so like maybe you want to add a style to all the paragraphs in your code, then just write 'p' in the css. To call the Id in CSS, write # then the ID name. To call classes to CSS, write . then the class name. To add all elements of one name, don't write anything and write the element name.",
                "thumbnail_image_url":"../images/2.6.png",
                "image_url":"../images/2.6.png"
            },
            {
                "Name":"CSS Properties",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to change text color, background color and how to add a border to elements.",
                "content":"CSS properties are styles that you can apply on an element. This lesson we will learn how to change the colour of text, change the background color of any element and create a border. First, changing the colour of text.  In our example, we gave an h1 the id, 'Title' and then we gave it two curly brackets. This opens where we put the CSS properties to style that specific element. Next, we typed: 'color:red;'. The first word is 'color', which means text-color. Next is the colon sign which tells the computer that the value before is what we're changing and the value after is what we want to set it to. Finally we have 'red' which we want to change the text color to. We put semi-colon to end the line and boom we have changed the text-color. We can do the same with background-color. Now, border, to make a border on an element we have to write 'border:(How big in px you want the border to be) solid (The color of the border)'. For example we can set the border to border:5px solid black; Which means the border will be 5px wide, it will be a solid line, and it will be black. Instead of using pre-set colors, you can use 'rgb(value, value, value)' and use RGB values. ",
                "thumbnail_image_url":"../images/2.7.png",
                "image_url":"../images/2.7.png"
            },
            {
                "Name":"Margin and Padding",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn what margin and padding are and how they work.",
                "content":"When we used border in the last lesson, we found that it created a box around the element. How can we move the box away from the content inside it and how can we bring it away from other elements? Margin creates a box around the border and moves away from other things. Padding creates a box in between the border and the text. This picture perfectly represents it. To write these CSS properties you can write margin:5px or any amount of px you want. To write padding, write padding:5px; or any amount of px you want. Try this out with border! To change the width and height of anything in CSS, write 'width:100px' or how many px you want and 'height:100px' for the height.",
                "thumbnail_image_url":"../images/2.8.png",
                "image_url":"../images/2.8.png"
            },
            {
                "Name":"Forms",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to get inputs from the user.",
                "content":"Today we will learn how to create forms and all the things that come in forms. Forms are places where you can get input from the user and we usually do that using javascript. But right now we do't know it so we can just learn it. To create a form div, we have to use <code>form</code> and <code>/form</code>. Inside this, we can put input elements. Input elements are used to get values from the user to the computer. <code>input type=””</code>. There's no need to close an input tag. The type attribute defines what value we want from the user. 'text', 'email', 'number', 'date', 'file' are just a few that are most commonly used. Try them all out. If you want to get a label for one of these inputs, write <code for=”(Which Input you want this label to be for)”>label</code> and <code>/label</code>. If you want to go into another line, you can type <code>br</code> and for a horizontal line, <code>hr</code>. No need for closing for these things.",
                "thumbnail_image_url":"../images/2.9.png",
                "image_url":"../images/2.9.png"
            },
            {
                "Name":"Position CSS Property",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"We will learn how to change the position of an element using position CSS properties.",
                "content":"LSometimes, we want to organize things as per a pixel. We can do that by using the position property. There are multiple ways to use position CSS properties. First we'll need to use one of two display properties. 'display:absolute;' or 'display:fixed;' These change how the element is being displayed. Absolute allows position properties and will have the scroll effect where it goes where you scroll. Fixed allows the position properties as well but it keeps the object where it is and never changes it when you scroll. Try them out so you can tell the difference. Create a h1 with display absolute and fixed then create a div with height of 1000px and see how they are different. Now, to change the position, we can use left:100px, right:100px, top:100px, bottom:100px. This makes the item go that many px away from where the property says. So left:50px would make the element go 50px to the right and 50px away from the right. ",
                "thumbnail_image_url":"../images/2.10.png",
                "image_url":"../images/2.10.png"
            }
        ]
    },
    {
        "Name":"Intermediate Concepts",
        "lessons":[
            {
                "Name":"Flexbox",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"It's time to learn about the flexible box. It can be used to make things responsive.",
                "content":"Last time we learnt about Position CSS property and different ways to display the item. You can also display it as 'block' which is default for div's and you can also display a div as 'flex'. This causes the div to be turned into a flexbox. Flexbox's do many useful things like putting objects next to each other, usually the item start on the next line, but in a flexbox, the objects go next to each other. Flexbox allows you to change the item's position responsively. Meaning if you change the size of the browser, it would move with the screen and it'll look better. So to begin this, let's create a div with display:flex; and then inside it create two divs, each with a heading that have different text. Now, create borders around the divs. border:3px solid black; There will be two boxes that are next to each other, if we take away the flexbox, they'll be underneath each other. There are many ways to organize this, using 'align-items' and 'justify-content'. We'll use justify-content this class and align-items next class. Justify-content is a property, and we can give it different values. For example, justify-content:end; This brings the items to the right most part they can. justify-content:center; does the same but brings them to the middle.  justify-content:space-between; puts space in between them. justify-content:space-around; puts space before, between and after the items. justify-content:space-evenly; puts an even amount of space before, between and after the items. It's best to test them all before moving on. Also, justify-content only changes things on the X axis of the screen.",
                "thumbnail_image_url":"../images/3.1.png",
                "image_url":"../images/3.1.png"
            },
            {
                "Name":"Align-Items",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"Flexbox part 2.",
                "content":"Last time we did justify-content which is the most common use of flexbox. Now we will learn about align-items, another property of flexbox. Align-items:stretch; stretches the items in the div to the height of the flexbox if they don't already have a set height value. Align-items:center; makes the items in the center vertically. align-items:baseline; sets them all to be at the bottom most they will be if there are more than one sizes. For example, let's say we have a flexbox. Inside that flexbox we have 3 divs, each with varying heights. Div 1 has 100px, Div 2 has 200px and Div 3 has 50px. It'll be pretty weird that they don't all come from the bottom. Their bases won't be at the same level, so baseline fixes that and set's the bottom to be the biggest div's (div 2) baseline. By the way, baseline only talks about text, it'll align itself properly for the text not the actual div.",
                "thumbnail_image_url":"../images/3.2.png",
                "image_url":"../images/3.2.png"
            },
            {
                "Name":"Background-Image and Gradients",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"Background Image Property.",
                "content":"It's time we learn more image stuff. We will first start with background-image. We have learnt background-color, but what if we want an image in the background instead of a color? We can create a div and then give it the css property: background-image:url(“”);Now in the double quotes we can put the URL of any image and it'll make it the background-image. There are many things we can do with this, for example we can make the image the size of the div by using 'background-size:cover;' or set it to a percentage by using 'background-size:90%' or whatever percent you want. You can also make it fixed so that it never moves and creates a parallax-esque effect. 'background-attachement:fixed;'. Using the same background-image property, we can make gradients. We can write 'background-image:linear-gradient(color,color)' and you can insert as many colors as you want for a linear gradient. You can also make conic and radial gradients by using the 'background-image:conic-gradient(color,color)' and 'background-image:radial-gradient(color,color,color)' properties respectively. If you put a percentage after the color name, you can have it be that much percent of the area. For example, background-image:linear-gradient(red, green 10%, yellow 20%); This creates a linear-gradient that starts with red, then when it reaches 10% of the way down, it goes green, then when it reaches 20% of the way down it turns yellow. ",
                "thumbnail_image_url":"../images/3.3.png",
                "image_url":"../images/3.3.png"
            },
            {
                "Name":"Iframe",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"Time to learn how to put a website in a website!",
                "content":"What if, you wanted to put another webpage inside your own webpage. You can do this using the iframe element. <code>iframe</code> and <code>/iframe</code> are used to create the iframe. Now we can add an attribute to the iframe called 'src=””’ and then put the link of any website in it and now the iframe will work. For an example, here I made an iframe with the id, Wikipedia, then I gave it a link to Wikipedia's homepage. The styling I put is 500px by 500px.",
                "thumbnail_image_url":"../images/3.4.png",
                "image_url":"../images/3.4.png"
            },
            {
                "Name":"Opacity",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"Changing how transparent things are.",
                "content":"You can change the opacity of an item by using the opacity:(value from 0 ~ 1) property. For example ,if you want something to be semi-transparent, use opacity:0.5; 0 being completely transparent and 1 being completely visible. 0.75 would be very visible and 0.25 would be almost invisible.",
                "thumbnail_image_url":"../images/3.5.png",
                "image_url":"../images/3.5.png"
            },
            {
                "Name":"Pseudo Classes",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"What happens when you hover over a element? This allows you to change properties when you hover over an element.",
                "content":"Pseudo Classes are the special state an object has when something happens. For example, when you hover over an element. How do you define a pseudo class? In CSS before to call an element, we would have to write . or # and then the id name and then open curly brackets. A pseudo class is when something happens to an element, so we call the element like usual and then we write the ':' sign and then finally we write what pseudo class we want. So it would look like .Element:Pseudo_Class {insert properties}. There are multiple pseudo classes, but the most important of them all is hover. It changes an elements style based on when you hover and when you don't, for an example, look at the picture.",
                "thumbnail_image_url":"../images/3.6.png",
                "image_url":"../images/3.6.png"
            },
            {
                "Name":"Navigation Bar",
                "ver":1.00,
                "date":"DD/MM/YYYY",
                "desc":"This is a very common thing to make, so I will teach you how to make it!",
                "content":"We will learn how to make a navigation bar now.  We will need pseudo-classes for this so it's important that we did this lesson afterwards. So first we will create a div called 'Navigation_Bar' (ID). Inside that we will create a list, to do this we need to create the <code>ol</code><code>/ol</code> tags. Inside this we create items by using <code>li</code> and <code>/li</code> tags. Create a bunch of these li tags. Give all the li tags a class. In the class give the following css properties: float:left; margin:10px;padding:20px; You know what margin and padding do. Float:left; tells the computer that the list items should go as left back as possible, even if it means going back a line. Now add border:3px solid black to the li and now inside each of those li, put a link to any webpage you want. Now, time to use the :hover pseudo-class we learnt last lesson. For the hover of a li item, set the background-color black and the text white. Give the a tag a class too and then call it and set the color black. Let me give an example because it's probably messy in your head right now. Text-decoration:none; removes the underline that the anchor gives. ",
                "thumbnail_image_url":"../images/3.7.png",
                "image_url":"../images/3.7.png"
            }
        ]
    }
]