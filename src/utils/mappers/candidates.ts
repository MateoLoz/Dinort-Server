import type { CandidateDto } from "src/features/candidates/candidates.dto";
import type{ ICandidatesInsert } from "src/features/candidates/candidates.types";

export const mapToInsert = async (values: CandidateDto): Promise<ICandidatesInsert> => {

    const obj: ICandidatesInsert = {
      full_name: `${values.firstName} ${values.lastName}`,
      email: values.email.toLowerCase(),
      cv: values.Curriculum,
      heard_from: values.heardFrom,
      cover_letter: values.coverLetter,
    };

    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== undefined)
    ) as ICandidatesInsert;
  };