import { toMachinesDto } from "./machine.mapper";
import getMachines from "./machines.service";

export default async function getAllMachinesService(lang : string) {
    const response = await getMachines(lang);

    if(!response) {
        return null;
    }

    return toMachinesDto(response);
}