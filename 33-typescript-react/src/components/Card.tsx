import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode; // 많이 쓰임
}

export default function Card({ title, children }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}
