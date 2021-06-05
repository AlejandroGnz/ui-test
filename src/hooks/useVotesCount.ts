import { useCallback, useEffect, useState } from "react";
/* eslint-disable import/no-extraneous-dependencies */
import firebase from "firebase/app";

interface Votes {
  negative: number;
  positive: number;
}

interface Actions {
  increase: () => void;
  decrease: () => void;
}

const defaultState = { negative: 0, positive: 0 };

const useVotesCount = (
  documentId: string,
  initState: Votes
): [Votes, Actions] => {
  const [value, setValue] = useState<Votes>(initState || defaultState);

  const increase = useCallback(() => {
    firebase
      .firestore()
      .collection("votes")
      .doc(documentId)
      .update({ positive: firebase.firestore.FieldValue.increment(1) });
  }, [documentId]);

  const decrease = useCallback(() => {
    firebase
      .firestore()
      .collection("votes")
      .doc(documentId)
      .update({ negative: firebase.firestore.FieldValue.increment(1) });
  }, [documentId]);

  useEffect(() => {
    const off = firebase
      .firestore()
      .collection("votes")
      .doc(documentId)
      .onSnapshot((doc) => {
        const docValue = doc.data();
        if (docValue) {
          setValue(docValue as Votes);
        }
      });
    return () => off();
  }, [documentId]);

  return [value, { increase, decrease }];
};

export default useVotesCount;
