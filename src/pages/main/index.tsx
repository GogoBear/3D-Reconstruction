import React, { useMemo } from 'react';
import { useCounter } from '@/hooks/useCounter';

const Main = () => {
  const { count, increment } = useCounter();

  const env: 'development' | 'production' = useMemo(() => {
    return import.meta.env.VITE_TEST || process.env.NODE_ENV === 'test' ? 'development' : 'production';
  }, []);

  return (
    <>
      <h2 className="test">Hello Vite + React!</h2>
      <p className="env