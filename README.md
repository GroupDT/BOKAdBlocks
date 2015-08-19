# BOK Ad Blocks
For integration with GA & GTM a number of standardised code snippets have been produced to be slotted into the BOK advertising platform.

The blocks take a number of standard inputs, such as: AddID, PromotionID, Image Filename, and peripheral parameters such as: background colours, and video URLs.

## Aisle Block
The aisle block has 4 inputs:

    ID   Input Type           Line    Input Type
    1    Background Colour    2       Hex Code (#333)
    2    Promotion ID         6       int(5)
    3    Add ID               6       int(5)
    4    Graphic Filename     16      File Path & Filename

## Search Block
The search advert has 4 inputs:

    ID   Input Type           Line    Input Type
    1    Background Colour    4       Hex Code (#333)
    2    Promotion ID         8       int(5)
    3    Add ID               8       int(5)
    4    Graphic Filename     18      File Path & Filename

## Shop in Shop Block [Standard]
The search advert has 2 inputs:

    ID   Input Type           Line    Input Type
    1    Graphic Filename     7       File Path & Filename
    2    Add ID               7       int(5)

## Shop in Shop Block [Video Feature]
The search advert has 3 inputs:

    ID   Input Type           Line    Input Type
    1    Graphic Filename     4       File Path & Filename
    2    Add ID               10      int(5)
    3    YouTube Embed URL    10      URL to Embedded Video (with flags)

    YouTube Flags - To flag video so that it has certain attributes, you will need to add these to the embedded URL :-
  
    Flag Name       Flag Key    Flag Values   Example
    Related Videos  rel         0 or 1        rel=0
    Auto Hide Menu  autohide    0 or 1        autohide=1
    Auto Play       autoplay    0 or 1        autoplay=0

Note: the Google Tagmanager does not currently track video plays.  These statistics should be gathered from YouTube channel analytics.

## Changelog

#### New Features

    1, Video Features in Shop-in-Shop
    2, Improved SIS Tracking

#### Next Developments

    1, Google Tag Manager Tracking of Embedded Video Interactions
        ->  http://www.optimizesmart.com/youtube-video-tracking-via-google-tag-manager/
        ->  http://www.cardinalpath.com/youtube-video-tracking-with-gtm-and-ua-a-step-by-step-guide/
    2, Mouse-Hover Tracking, without Conversion Click
