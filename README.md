# JsBlog: Static blogs made "Easy"
This has been made for a personal project as a build environment-less system. The only requirement is to *use a localhost server* or else the browser treats the files as separate origin and the file request is ignored, leading to an error. **This error also appears if the internet connection of the user is unable to resolve the request in 1 second, but it'll still work after the error is thrown.** If this is a concern to you, raise the value of `errWaitTime` in `scripts.js`.

# So how do I make a post?
It's designed to be dead simple. Simply create a new HTML file in the `posts/` directory. (or a different directory, but be sure to link it correctly) You do not need a `<head>`, `<body>` or even to declare `<!DOCTYPE html>` as it's inserted into a source document with all that in place for you. If you need to keep this in mind, it will be inserted into a `div` inside `<body>`, usually immediately after `DOMContentLoaded` fires, with the exception of posts loaded manually.

# I already have a `scripts.js` on my site!
That's okay, just copy and paste the two files into one and you should have no problems.
## I want them to be separate!
That's fine too, just rename the file and make sure that `post.html` links to the new name. I don't think that it would cause conflicts between it and your functions, but I suppose it could, so this is the best way of isolating that problem to only pages that need the content in this repository.

# Why does it not come with CSS?
I designed `list.html` as a starting point/example for your own landing page, and `post.html` to be integrated into some kind of template for your site. Essentially, it piggybacks off your CSS, and it should look pretty decent with your own formatting. Just copy everything in `post.html`'s body into your template and you should be golden.

## I can't make good CSS!!
Welp, this wasn't exactly a set-it-and-forget-it operation anyway, you would need to touch the code at some point. Sink or swim!

Try starting by changing `font-family` and a few colors here and there and with even minimal knowledge and enough google searches you should get something that looks okay. It's okay to want to change it after only a day or so, it's just part of learning to design. Luckily there are only a few elements in place, so you don't actually need to write that much.

I hope you enjoy this system!
