# Onlinekosten.de Reader

This small webserver aims to make it easier to work with the onlinekosten.de/forum dump you can find over at r/DataHoarder.

## Quickstart

```sh
git clone git@github.com:rDataHoarder/onlinekosten-reader.git
cd onlinekosten-reader
yarn install
yarn build
yarn start
```

## Using Docker

You can also run this via docker. Simply pull the container and provide the path to the data (as they are not included in the container).

```
docker run -p 3000:3000 --rm --mount type=bind,source=/path/to/onlinekosten.sqlite3,target=/reader/onlinekosten.sqlite3,readonly dunklestoast/onlinekosten-reader:latest
```
Service should be available at `http://localhost:3000`.

## Routes
As this is just a small tool to make it easier to get into the data, it basically has two routes. If you need more, grab the Database and have fun with it.

### `/topic/:id`
This fetches a topic directly by it's ID. The ID consists of topic number and page number.

Example: `https://www.onlinekosten.de/forum/showthread.php?t=1337&page=2` => `1337:2`.

Note: Navigation between pages is broken here, use route below

### `/forum/showthread.php?t=<topic>&page=<page>`
This is probably the URL you want to use. It has the same scheme as the original forum and therefore makes the navigation work.

`t` is a required parameter - it's the topic number.

`page` is the page number *shocker*. This is not required. Also, this route supports redirects. Test it with topic 23370 which redirects to 23369 <sup>_nice_</sup>

# FAQ

## I am prompted to login, why?
Some of the topics redirected to the login page - since I do not have an account on that forum and registrations are closed, I was not able to scrape those. 
Also, scraping non-public content [seems to be against the law](https://www.frag-einen-anwalt.de/Nutzung-von-Daten-einer-Webseite-innerhalb-einer-App--f263410.html) so I did not bother with that.

## Images are not loading
That's correct. The dump only includes text content. I do not know if I have time to grab all the images from the forum. However, it seemed like images needed to be hosted at external hosters and not on the Board itself, meaning they won't get deleted.

## Something is missing
This can happen. I tried to catch all pages (until topic 154671) but humans make mistakes. Sorry for that.

## Something is not working
Open a GitHub Issue or ping me on Reddit. I might respond.

## That's awesome. Can I support you?
Join [r/DataHoarder](https://reddit.com/r/DataHoarder) and be part of the community! Archive things, make requests, engage others! That'd be awesome :)
However, if you want to financially support me, do so via [PayPal](https://www.paypal.me/dunklestoast) but only if you really want to. I do this for fun, so I don't expect anyone to donate / tip me!
