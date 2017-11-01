class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(endYear) {
    let startYear = this.startDate.getFullYear() + 1;
    return endYear - startYear;
  };
};

class Route {
  constructor(beginningLocation, endLocation) {
    this.beginningLocation = beginningLocation;
    this.endLocation = endLocation;
  };

  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  
  blocksTravelled() {
    let horizontalStart = eastWest.indexOf(this.beginningLocation.horizontal) + 1;
    let horizontalEnd = eastWest.indexOf(this.endLocation.horizontal) + 1;
    let horizontalTravel = horizontalEnd - horizontalStart;
    let verticalTravel = this.endLocation.vertical - this.beginningLocation.vertical;
    return verticalTravel + horizontalTravel;
  };

  estimatedTime(peakTime) {
    if (peakTime) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  };
};
