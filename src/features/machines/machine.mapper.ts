import type { Machine } from "./machine.types";
import type { MachineDto } from "./machine.dto";

export function toMachineDto (machine : Machine) : MachineDto {
    return {
    id: machine.id,
    machineImage: machine.machines?.machine_image!,
    description: machine.description,
    languague: machine.languague,
    machineName: machine.machine_name,
    type: machine.type,
    }
}

export function toMachinesDto (machine : Machine[]) : MachineDto[] {
    return machine.map(toMachineDto);
}