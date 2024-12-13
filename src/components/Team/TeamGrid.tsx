import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from './teamData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function TeamGrid() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      {teamMembers.map((member, index) => (
        <motion.div key={member.name} variants={staggerItem}>
          <TeamMemberCard member={member} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}