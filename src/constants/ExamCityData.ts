interface Property {
    name: string;
    location: string;
    distanceFromCityCenter: string;
    amenities: string[];
    roomOptions: number;
    offers: number;
    price: {
      from: string;
      status?: string;
    };
    images: string[];
  }
  
  
export const properties: Property[] = [
        
    {
      "name": "Arbour House",
      "location": "Sebastian St, London",
      "distanceFromCityCenter": "2.1 mi",
      "amenities": ["Recycling", "Bike Storage", "Laundry Facility"],
      "roomOptions": 5,
      "offers": 2,
      "price": {
        "from": "£389/week",
        "status": "Filling Fast"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/286860/94890935.jpg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "Bedroom", "Bedroom", "Exterior", "Bedroom"]
    },
    {
      "name": "Britannia South Bank",
      "location": "Rushworth St, London",
      "distanceFromCityCenter": "1.4 mi",
      "amenities": ["Dual Occupancy", "Wifi Internet", "Laundry Facilities"],
      "roomOptions": 10,
      "offers": 2,
      "price": {
        "from": "£279/week",
        "status": "Filling Fast"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/211546/37fe10ab.jpeg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "Bronze Studio - Bedroom", "Amenities", "Exterior", "Exterior", "Common Area"]
    },
    {
      "name": "Chapter Kings Cross",
      "location": "Pentonville Rd, London",
      "distanceFromCityCenter": "2.3 mi",
      "amenities": ["Cinema", "Laundry Facility", "Study Area"],
      "roomOptions": 18,
      "offers": 2,
      "price": {
        "from": "£315/week"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/209397/6c45e8f9.jpeg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "Premium Range 2 Ensuite - Bedroom", "Common Area", "Common Area", "Amenities", "Exterior"]
    },
    {
      "name": "Moonraker Point",
      "location": "Pocock St, London",
      "distanceFromCityCenter": "1.5 mi",
      "amenities": ["Laundry Facility", "Bike Storage", "Vending Machine"],
      "roomOptions": 8,
      "offers": 2,
      "price": {
        "from": "£339/week"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/282208/bbf25080.jpg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "Amenities", "Common Area", "Amenities", "Common Area"]
    },
    {
      "name": "Harrington Housing Central London",
      "location": "City Rd, London",
      "distanceFromCityCenter": "2.4 mi",
      "amenities": ["Gym", "Fully Furnished", "Tv"],
      "roomOptions": 5,
      "offers": 2,
      "price": {
        "from": "£295/week",
        "status": "Filling Fast"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/181141/d4f1b5df.jpeg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "https://prod-assets.amberstudent.com/inventories/212049/bf561d21.jpg?w=720&h=480&fit=crop&q=0&auto=format&trim=auto", "Amenities", "Bedroom", "Room"]
    },
    {
      "name": "Go Britanya East Central House",
      "location": "Lever St, London",
      "distanceFromCityCenter": "2.3 mi",
      "amenities": ["Central Location", "Private Outdoor Courtyard", "Pool Table"],
      "roomOptions": 6,
      "offers": 2,
      "price": {
        "from": "£365/week"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/192387/980d662f.jpg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "Amenities", "Exterior", "Exterior"]
    },
    {
      "name": "The Hub",
      "location": "S Lambeth Rd, London",
      "distanceFromCityCenter": "1.9 mi",
      "amenities": ["Bills Included", "Dual Occupancy", "Laundry Facility"],
      "roomOptions": 5,
      "offers": 1,
      "price": {
        "from": "£352/week"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/133113/64afd34f.jpg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "Bronze Ensuite - Bedroom", "Exterior", "Kitchen", "Amenities", "Kitchen"]
    },
    {
      "name": "Spring Mews",
      "location": "Tinworth St, London",
      "distanceFromCityCenter": "1.5 mi",
      "amenities": ["Bills Included", "Gym", "Laundry Facility"],
      "roomOptions": 21,
      "offers": 2,
      "price": {
        "from": "£360/week"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/212049/bf561d21.jpg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "Amenities", "Exterior", "Exterior", "Amenities"]
    },
    {
      "name": "East Central House",
      "location": "Lever St, London",
      "distanceFromCityCenter": "2.3 mi",
      "amenities": ["Laundry", "Bike Storage", "Printing Service"],
      "roomOptions": 5,
      "offers": 2,
      "price": {
        "from": "£349/week"
      },
      "images": ["https://prod-assets.amberstudent.com/inventories/924831/01e521ff.jpg?w=480&h=360&fit=crop&q=0&auto=format&trim=auto", "Silver Ensuite - Bedroom", "Common Area", "Common Area", "Common Area", "Amenities"]
    }
  ]