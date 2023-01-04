import React, { useState } from 'react';
import './HsAdmin.css';

export default function HsAdmin(props) {
  const [person, setPerson] = useState({
    name: '에이든',
    title: '주니어',
    job: '개발자',
    admin: {
      name: '케일',
      title: '시니어',
      job: '개발자',
    },
  });
  return (
    <div className='text'>
      <h1>{`${person.name}는 ${person.title}${person.job}`}</h1>
      <p>{`${person.name}의 선임은 ${person.admin.name} (${person.admin.title}${person.admin.job})`}</p>
      <button
        onClick={() => {
          const name = prompt('이름을 변경하시겠습니까?');
          setPerson((person) => ({
            ...person,
            admin: { ...person.admin, name },
          }));
        }}
      >
        선임 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt('직급을 변경하시겠습니까?');
          setPerson((person) => ({
            ...person,
            admin: { ...person.admin, title },
          }));
        }}
      >
        선임 직급 바꾸기
      </button>
      <button
        onClick={() => {
          const job = prompt('직무을 변경하시겠습니까?');
          setPerson((person) => ({
            ...person,
            admin: { ...person.admin, job },
          }));
        }}
      >
        선임 직무 바꾸기
      </button>
    </div>
  );
}
