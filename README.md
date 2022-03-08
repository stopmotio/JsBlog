# JsBlog: Static blogs made "Easy"
This has been made for a personal project as a build environment-less system. The only requirement is to *use a localhost server* or else the browser treats the files as separate origin and the file request is ignored, leading to an error. **This error also appears if the internet connection of the user is unable to resolve the request in 1 second, but it'll still work after the error is thrown.** If this is a concern to you, raise the value of `errWaitTime` in `scripts.js`.

More documentation soon™
