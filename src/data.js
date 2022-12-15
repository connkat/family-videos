export const videos = [
    { date: "March 12",
      year: "1997",
      embedId: "hzSSQ7_9enI",
      main: null,
      others: null,
      event: null,
    },
    {
      date: "April 30",
      year: "1994",
      embedId: "MdkGe8wyd5c",
      main: null,
      others: null,
      event: null,
    }, 
    {
      date: "Aug 12",
      year: "1993",
      embedId: "XONd8rYCDRk",
      main: "Shelagh",
      others: null,
      event: "birthday",
    },
    {
      date: "Jan 8",
      year: "1994",
      embedId: "1WiaDMfRZME",
      main: "Nancy",
      others: null,
      event: "birthday",
    },
  
  ];
  

  function createData(date, year, event, mainPerson, embedId) {
    return {
      date,
      year,
      event,
      mainPerson,
      embedId,
    };
  }
  
  export const rows = [
    createData("March 12, 1997", "1997", null, null, "hzSSQ7_9enI"),
    createData("April 30, 1994", "1994", null, null, "MdkGe8wyd5c"),
    createData("August 12, 1993", "1993", "Birthday", "Shelagh", "XONd8rYCDRk"),
    createData("January 8, 1994", "1994", "Birthday", "Nancy", "1WiaDMfRZME"),
    createData("March 10, 1997", "1997", "March Break", null, "Hf2CzVDALno"),
    createData("April 29, 1984", "1984", null, null, "p-HsR-Oa6uQ"),
    createData("Oct 5,1991", "1991", "Birthday", "Shelagh", "PLorTjJPabM"),
    createData("May 18, 1987", "1987", "Crawling", "Shelagh", "mcNc9cg7ntE"),
    createData("Dec 25, 1990", "1990", "Christmas", null, "IQwc6B6wOAE"),
    createData("Dec 6, 1990", "1990", "Birthday", "Meaghan", "rbZTo3JYWOk"),
    createData("Dec 3	1990", "1990", null, null, "EbFQW6y9oxY"),
    createData("Oct 31, 1985", "1985", "Halloween", "Meaghan", "au7q8gfaG8A"),
    createData("Dec 6,1988", "1988", "Birthday", "Meaghan", "HKF1_FGp4Fs"),
    createData("Dec 6	1987", "1987", "Birthday", "Meaghan", "a0VYVDK2t9U"),
    createData("Dec 6	1985", "1985", "Birthday", "Meaghan", "WdkUk8I1Hz8"),
    createData("Dec 6	1984", "1984", "Birthday", "Meaghan", "OtIWqB37-ZM"),
    createData("Dec 6	1985", "1985", "Birthday", "Meaghan", "Aqnc6hGe8Jk"),
    createData("Oct 17, 1993", "1993", "Birthday", "John", "rtxLum8YAU4"),
    createData("Oct 16, 1991", "1991", "Birthday", "John", "sp3Y7uQL-9Y"),
    createData("Oct 15, 1989", "1989", "Birthday", "John", "k6u3l7ePftY"),
    createData("June 27, 1996", "1996", "Baseball", "John", "uRUa48JMRUs"),
    createData(
      "June 25, 1996",
      "1996",
      "Kindergarden Grad",
      "Kate",
      "uRUa48JMRUs"
    ),
    createData(
      "June 24, 1994",
      "1994",
      "Kindergarden Grad",
      "John",
      "TJQ8JcyUSWM"
    ),
    createData("Dec 6, 1983", "1983", "News", null, "m5jtiBtfNyY"),
    createData("April 1, 1990", "1990", "First Steps", "John", "9CiuAwSzGQ8"),
    createData("Jan 17, 1984", "1984", "Meaghan", "kvYJ57fcvi0"),
    createData("Oct 25, 1988", "1988", "John", "sI9W8Lb7NsU"),
    createData("June 15, 1994", "1994", "Birthday", "Kate", "3OfUkJ5kY9U"),
    createData("March 17,	1994", "1994", "March Break", null, "F_BuZoN55lM"),
    createData("June 16, 1991", "1991", "Birthday", "Kate", "vRV-Ckpem2E"),
    createData("June 15, 1993", "1993", "Birthday", "Kate", "B-OgX67fMYI"),
    createData("June 14, 1992", "1992", "Birthday", "Kate", "HNJbrR_9SLw"),
    createData("Dec 26, 1991", "1991", "First Steps", "Kate", "oednobezVFo"),
    createData("Dec 1, 1990", "1990", "1990", "MSM", null, "FIND URL"),
    createData("Aug 1,1991", "1991", "Cameron Lake", null, "aRjkvvUTDbM"),
    createData("Nov 30, 1990", "1991", "MSM", "Kate", "s-1AbqM0Yp0"),
  ];