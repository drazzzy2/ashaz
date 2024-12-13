import React from 'react';
import { Statistic } from '../../types';

interface StatCardProps {
  stat: Statistic;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="bg-navy-800 p-6 rounded-lg">
      <p className="text-pink-500 text-sm font-medium mb-2">{stat.label}</p>
      <p className="text-white text-3xl font-bold">{stat.value}</p>
    </div>
  );
}