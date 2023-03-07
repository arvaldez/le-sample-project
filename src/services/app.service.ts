import axios, * as others from "axios"

export class AppService {
  public async getMaterialQuantityPerPlant(): Promise<any> {
    const response = await axios.get(
      "https://le-sample-project-static-poi20u9l1-arvaldez.vercel.app/db.json"
    )
    return response.data.material_quantity_per_plant_solar
  }

  public async persons(): Promise<any> {
    const response = await axios.get("https://fakerapi.it/api/v1/persons")
    return response.data.data
  }
}
