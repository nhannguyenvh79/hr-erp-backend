import Seq from "../../models/general/seq.model.js";

export const getId = async (collectionName) => {
  let existSeq = await Seq.findOne({ name: collectionName });

  if (!existSeq) {
    const _idSeq = (await Seq.countDocuments({})) + 1 || 1;
    existSeq = await Seq.create({
      name: collectionName,
      seq: 1,
      _id: _idSeq,
    });
    return existSeq.seq;
  }

  existSeq.seq = existSeq.seq + 1;
  existSeq = await existSeq.save();

  return existSeq.seq;
};
