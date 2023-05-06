

api=[
      {
          "id": 20,
          "title": "sdcsdcsd",
          "street": "Turusbekov Street",
          "rating": 3,
          "description": "dscsdcsdcsdcsdcsdcsdcdscds",
          "importance": false,
          "longitude": 12,
          "latitude": 12,
          "created_date": "2023-05-06T02:16:21.687993Z"
      },
      {
          "id": 19,
          "title": "sdcdscs",
          "street": "Тюпский переулок",
          "rating": 5,
          "description": "sdcsdcsdcsdcsdcd",
          "importance": false,
          "longitude": 74,
          "latitude": 74,
          "created_date": "2023-05-06T02:16:13.133845Z"
      },
      {
            "id": 19000,
            "title": "sdcd0scs",
            "street": "Тюпский переулок",
            "rating": 5,
            "description": "sdcsdcsdcsdcsdcd",
            "importance": false,
            "longitude": 75,
            "latitude": 75,
            "created_date": "2023-05-06T02:16:13.133845Z"
        },
      {
          "id": 18,
          "title": "ploho",
          "street": "Manas Street",
          "rating": 2,
          "description": "lorem iopsum dolor amet consector",
          "importance": false,
          "longitude": 0,
          "latitude": 0,
          "created_date": "2023-05-06T02:15:38.939705Z"
      }
  ]

  function convertApiToArray(api) {
    const groupedData = {};
    
    // Group objects by street
    api.forEach(item => {
      const street = item.street;
      if (groupedData.hasOwnProperty(street)) {
        groupedData[street].push([item.longitude, item.latitude]);
      } else {
        groupedData[street] = [[item.longitude, item.latitude]];
      }
    });
    
    // Convert grouped data to array format
    const convertedArray = Object.values(groupedData).map(group => {
      return [
        ...group
      ];
    });
  
    return convertedArray;
  }
  
  const convertedData = convertApiToArray(api);
  console.log(convertedData);