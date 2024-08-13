import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PolicyDropdown = ({ onChange }) => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/policies/all'); // Replace with your API endpoint
        setPolicies(response.data);
      } catch (error) {
        console.error('Error fetching policies:', error);
      }
    };

    fetchPolicies();
  }, []);

  return (
    <select onChange={onChange} className="w-full p-2 border border-black dark:border-white rounded bg-transparent text-black dark:text-white">
      <option value="">Select a policy</option>
      {policies.map((policy) => (
        <option key={policy.id} value={policy.id}>
          {policy.name}
        </option>
      ))}
    </select>
  );
};

export default PolicyDropdown;
