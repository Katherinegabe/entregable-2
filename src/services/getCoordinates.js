export const getCoordinates = async () => {
    try {
     const position = await new Promise((resolve, reject) => {
    //Cuando se ejecuta resolve, la promesa se resuelve
    // reject();
       navigator.geolocation.getCurrentPosition(resolve,reject);
    });   

     return { 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
    };
    } catch (_) {
      return null;
    }
};    