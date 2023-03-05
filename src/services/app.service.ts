import axios, * as others from "axios"

export class AppService {
  public async getMaterialQuantityPerPlant(): Promise<any> {
    const response = await axios.get(
      "http://localhost:3004/material_quantity_per_plant_solar"
    )
    return response.data
  }
}
