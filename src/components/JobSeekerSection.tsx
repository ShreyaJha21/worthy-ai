import React, { useState } from 'react';
import { Check, X, TrendingUp, Briefcase, DollarSign, Clock, Code } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const JobSeekerSection: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    salary: '',
    experience: '',
    skills: ''
  });

  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <motion.section 
      id="job-seekers" 
      className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className="p-6 md:p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <TrendingUp className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">For Job Seekers</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Evaluate if a job offer truly matches your worth in the current market
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Input
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="e.g., Google"
                icon={<Briefcase className="h-5 w-5 text-slate-400" />}
              />

              <Input
                label="Offered Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                placeholder="e.g., Senior Frontend Developer"
                icon={<Code className="h-5 w-5 text-slate-400" />}
              />

              <Input
                label="Offered Salary (Optional)"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g., 120000"
                type="number"
                icon={<DollarSign className="h-5 w-5 text-slate-400" />}
              />

              <Input
                label="Experience Asked (Years)"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                placeholder="e.g., 5"
                type="number"
                icon={<Clock className="h-5 w-5 text-slate-400" />}
              />

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Skills Asked
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                  placeholder="e.g., React, TypeScript, Node.js"
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  rows={3}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Check If It's Worth It
              </Button>
            </motion.form>
          ) : (
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Estimated Salary Range</h4>
                <p className="text-2xl font-bold text-slate-800 dark:text-white">$110,000 - $135,000</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Based on current market data and your experience</p>
              </div>

              <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Work Culture Snippets</h4>
                <div className="space-y-3">
                  <p className="text-slate-700 dark:text-slate-300 italic">"Great work-life balance with flexible hours."</p>
                  <p className="text-slate-700 dark:text-slate-300 italic">"Opportunities for growth but can be competitive."</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Company Reviews</h4>
                <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  View on Glassdoor →
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl flex items-center">
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-full mr-4">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800 dark:text-green-400">Worth It</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    This offer aligns well with your experience and market value.
                  </p>
                </div>
              </div>

              <Button 
                variant="subtle" 
                size="md" 
                onClick={() => setShowResults(false)}
                className="w-full"
              >
                Try Another Offer
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default JobSeekerSection;