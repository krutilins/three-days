export interface GeoapifyMetadata {
  type: string;
  features: {
    type: string;
    properties: {
      datasource: {
        sourcename: string;
        attribution: string;
        license: string;
        url: string;
      };
      housenumber: string;
      street: string;
      suburb: string;
      city: string;
      county: string;
      state: string;
      postcode: string;
      country: string;
      country_code: string;
      lon: number;
      lat: number
      formatted: string;
      address_line1: string;
      address_line2: string;
      result_type: string;
      rank: {
        importance: number;
        popularity: number;
        confidence: number;
        match_type: string;
      };
      place_id: string;
    };
    geometry: {
      type: string;
      coordinates: number[];
    };
    bbox: number[];
  }[];
  query: {
    text: string;
    parsed: {
      housenumber: string;
      street: string;
      postcode: string;
      district: string;
      country: string;
      expected_type: string;
    }
  };
}
