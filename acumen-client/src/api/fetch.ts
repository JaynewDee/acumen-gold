/* 
    This file will contain the business logic for interfacing with the server.
    Images may be fetched from, in cascading fallback order:
    - cache, if images available
    - if cache needs updating, refresh cache
    - when online, if no images in cache, make call to server to retrieve user's s3 objects
    - ...
*/

export const getHome = async () => await fetch("http://localhost:3001/");

export const getData = () => {};
