'use client';

import useGroups from '@/hooks/useStudents';
import type GroupInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import useStudents from '@/hooks/useStudents';
import StudentInterface from '@/types/StudentInterface';

const Students = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Students}>
      {students.map((student: StudentInterface) => (
        <h2 key={student.id}>
          {student.id} -
          {student.first_name}
          {student.last_name}
          {student.middle_name}
          {student.groupid}
        </h2>
      ))}
    </div>
  );
};

export default Students;
