# Email Dashboard

Designing a basic Email dashboard using a <a href=https://redsift.com/>Redsift</a>
open platform


## The why?
The challenge is to familiarise oneself with the Redsift platform workflow, being able to
design a simple dashboard and get acquainted with emails' security protocols 



## What and how
The idea for the dashboard was taken from the following image from the google search

<img src="https://powerbicdn.azureedge.net/mediahandler/blog/legacymedia/7585.Mandrill_2D00_Dashboard_2800_1_2900_.jpg" width="300" />

from this dashboard I have selected the ring(or half pie) chart, the world map and added a display that shows whether the last five last emails passed dkim and spf authentication. The styled version with CSS on <a href=https://fast-retreat-94000.herokuapp.com/>heroku</a> looks like this

<img src="https://downloader.disk.yandex.ru/preview/822cae0941ec480e2089c57de702cace6f0420133897f9915ba9d1b7244a501d/5ad722de/0acWjf_Znov2i6P-XTV3THMBlItP7lM-dU0MUZSZgYk8Di2oHwVrxgHlENP8geMW0TOKp4Sc_lATzhDriZXXoA%3D%3D?uid=0&filename=heroku_version.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048" width="300"/>

At this stage the redsift version without any styling looks like this:

<img src="https://downloader.disk.yandex.ru/preview/68fc5696870c7556e76f3d77faf1b8d61a9cddeb3550faf4bcf488d9ef1bbc72/5ad72699/0acWjf_Znov2i6P-XTV3TBrgTnTmfIqufgGsamS1Kr1nBWUz0lKHnNDtDNdoliPfmV1C4jWjauUMXhB7S2XPVg%3D%3D?uid=0&filename=redsift.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048" width="300">

### Why specifically these charts?

* The latest emails display demonstrates that we can retrieve the information from email headers and check if the sources of this emails are secure and/or authentic. Every time a new emails arrive, the display should show from whom this email and results for dkim and spf auth.

* The half pie chart is intended to show emails' semantic. In the future, an additional node could be added to analyse the email's text body and label it. At this stage this chart is static

* The world map charts generally look, especially if they are interactive, and easy to understand. 
However, for technical reasons they can't be used to show the country of email origin, as this information is not often available. Potentially, there could be other applications for it. 

### Main Limitations

* The main limitation is that at this stage dashboard charts are static. The dashboard is not deployed on redsift and has no functionality to update when a new email arrives

* The CSS is not added to platform's version
