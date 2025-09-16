import { getGroupsDb } from '@/db/groupDb';
import GroupInterface from '@/types/GroupInterface';

export const getGroupsApi =async (): Promise<GroupInterface[]> => {

  //const groups = getGroupsDb();
  const response = await fetch("http://localhost:3000/api/groups");
  const groups = response.json();
  return groups;
};
