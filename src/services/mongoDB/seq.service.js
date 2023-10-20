import { getUuid } from "../../configs/uuid.config.js";
import Seq from "../../models/general/seq.model.js";

export const updateSeq = async (collectionName) => {
  let existSeq = await Seq.findOne({ name: collectionName });

  if (!existSeq) {
    existSeq = await Seq.create({
      name: collectionName,
      seq: 1,
    });
    return existSeq.seq;
  }

  existSeq.seq = existSeq.seq + 1;
  existSeq = await existSeq.save();

  return existSeq.seq;
};
