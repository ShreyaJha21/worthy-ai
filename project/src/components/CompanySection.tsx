import React, { useState } from 'react';
import { Upload, Github, Linkedin } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';

const CompanySection: React.FC = () => {
  const [formData, setFormData] = useState({
    resume: '',
    github: '',
    linkedin: ''
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
    <section id="companies" className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
      <div className="h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">For Companies</h3>
        <p className="text-slate-600 mb-6">
          Quickly assess candidate fit and determine appropriate compensation
        </p>

        {!showResults ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Resume Text
              </label>
              <textarea
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                required
                placeholder="Paste resume text here..."
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                rows={6}
              />
            </div>

            <Input
              label="GitHub Profile Link (Optional)"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="e.g., https://github.com/username"
              icon={<Github className="h-5 w-5 text-slate-400" />}
            />

            <Input
              label="LinkedIn Profile Link (Optional)"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="e.g., https://linkedin.com/in/username"
              icon={<Linkedin className="h-5 w-5 text-slate-400" />}
            />

            <Button type="submit" variant="primary" size="lg" className="w-full bg-teal-500 hover:bg-teal-600">
              Analyze Candidate
            </Button>
          </form>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h4 className="text-sm font-medium text-slate-500 mb-1">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker'].map((skill, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-500 mb-1">Suggested Salary Range</h4>
              <p className="text-2xl font-bold text-slate-800">$115,000 - $140,000</p>
              <p className="text-sm text-slate-500 mt-1">Based on 5+ years of experience and skill set</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  S
                </div>
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Strong Candidate</h4>
                <p className="text-blue-700 text-sm">
                  Active GitHub contributions and relevant technical experience.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-slate-500">Strengths</h4>
              <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                <li>Extensive experience with modern JavaScript frameworks</li>
                <li>Consistent GitHub contributions (15+ repositories)</li>
                <li>Demonstrated leadership in previous roles</li>
              </ul>
            </div>

            <Button 
              variant="subtle" 
              size="md" 
              onClick={() => setShowResults(false)}
              className="w-full"
            >
              Analyze Another Candidate
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanySection;