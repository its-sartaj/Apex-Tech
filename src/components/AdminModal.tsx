import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Lock, ShieldCheck, Download, Trash2, Phone, Mail, 
  MessageSquare, Search, Filter, RefreshCw, CheckCircle, Clock, AlertCircle, Eye
} from 'lucide-react';
import { Inquiry } from '../types';
import { 
  getInquiries, updateInquiryStatus, deleteInquiry, 
  clearAllInquiries, exportInquiriesCSV 
} from '../utils/inquiries';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_PIN = 'apex2026';

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('apex_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'closed'>('all');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  // Load inquiries when modal opens
  useEffect(() => {
    if (isOpen) {
      setInquiries(getInquiries());
    }
  }, [isOpen]);

  // Handle keyboard ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem('apex_admin_auth', 'true');
      setPinError('');
      setPinInput('');
      setInquiries(getInquiries());
    } else {
      setPinError('Incorrect PIN. Default is: apex2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('apex_admin_auth');
  };

  const handleStatusChange = (id: string, newStatus: Inquiry['status']) => {
    const updated = updateInquiryStatus(id, newStatus);
    setInquiries(updated);
    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      const updated = deleteInquiry(id);
      setInquiries(updated);
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Delete ALL stored inquiries? This cannot be undone.')) {
      clearAllInquiries();
      setInquiries([]);
      setSelectedInquiry(null);
    }
  };

  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inq) => {
      const matchesSearch = 
        (inq.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (inq.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (inq.phone || '').includes(searchTerm) ||
        (inq.service || '').toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [inquiries, searchTerm, statusFilter]);

  const counts = useMemo(() => {
    return {
      total: inquiries.length,
      new: inquiries.filter((i) => i.status === 'new').length,
      contacted: inquiries.filter((i) => i.status === 'contacted').length,
      closed: inquiries.filter((i) => i.status === 'closed').length,
    };
  }, [inquiries]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-[#11141C] border border-[#714B67]/40 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#14101A]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#714B67]/30 border border-[#714B67]/50 flex items-center justify-center text-[#9B6C8F]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-white">Apex Tech Admin Portal</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#017E84]/30 text-[#00A09D] font-mono border border-[#017E84]/40">
                    v1.0
                  </span>
                </div>
                <p className="text-xs text-white/50">Lead & Inquiry Management Dashboard</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs transition-colors"
                >
                  Lock
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Close Admin Portal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          {!isAuthenticated ? (
            /* PIN Unlock Screen */
            <div className="p-8 sm:p-12 max-w-md mx-auto w-full text-center my-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#714B67]/20 border border-[#714B67]/40 text-[#9B6C8F] flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-1.5">Enter Admin PIN</h4>
              <p className="text-xs text-white/60 mb-6">
                Access client leads and contact form inquiries.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder="Enter PIN (Default: apex2026)"
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      if (pinError) setPinError('');
                    }}
                    autoFocus
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-center font-mono tracking-widest text-base focus:outline-none focus:border-[#714B67] focus:ring-1 focus:ring-[#714B67] transition-all"
                  />
                  {pinError && (
                    <p className="text-rose-400 text-xs mt-2 flex items-center justify-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{pinError}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#714B67] hover:bg-[#885B7C] text-white font-bold text-sm transition-colors shadow-lg cursor-pointer"
                >
                  Unlock Dashboard
                </button>

                <p className="text-[11px] text-white/40">
                  Tip: Default PIN is <code className="text-[#00A09D]">apex2026</code>
                </p>
              </form>
            </div>
          ) : (
            /* Inquiries Dashboard */
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              {/* Metrics & Control Bar */}
              <div className="p-5 border-b border-white/10 bg-[#0d0f16] flex flex-wrap items-center justify-between gap-4">
                {/* Metric Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium">
                    Total: <strong className="text-white">{counts.total}</strong>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium">
                    New: <strong>{counts.new}</strong>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium">
                    Contacted: <strong>{counts.contacted}</strong>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                    Closed: <strong>{counts.closed}</strong>
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setInquiries(getInquiries())}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs flex items-center gap-1.5 transition-colors"
                    title="Refresh Inquiries"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>
                  <button
                    onClick={exportInquiriesCSV}
                    disabled={inquiries.length === 0}
                    className="px-3 py-2 rounded-xl bg-[#017E84] hover:bg-[#00A09D] text-white text-xs font-bold flex items-center gap-1.5 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                  {inquiries.length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs transition-colors"
                      title="Clear All Leads"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Filter & Search Bar */}
              <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search by client name, email, phone or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#714B67] transition-all"
                  />
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0 overflow-x-auto pb-1 sm:pb-0">
                  <Filter className="w-3.5 h-3.5 text-white/40 shrink-0 hidden sm:block" />
                  {(['all', 'new', 'contacted', 'closed'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setStatusFilter(filter)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all shrink-0 ${
                        statusFilter === filter
                          ? 'bg-[#714B67] text-white font-bold'
                          : 'bg-white/5 text-white/60 hover:text-white'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inquiries List & Detail Split View */}
              <div className="flex-1 min-h-0 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden">
                {/* List Pane */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0">
                  {filteredInquiries.length === 0 ? (
                    <div className="text-center py-16 text-white/40 text-xs">
                      {inquiries.length === 0 ? (
                        <div>
                          <CheckCircle className="w-10 h-10 mx-auto mb-2 text-white/20" />
                          <p className="font-semibold text-sm text-white/60">No Inquiries Yet</p>
                          <p className="mt-1">When someone submits the Contact Form or Consultation Modal, leads will appear here in real time!</p>
                        </div>
                      ) : (
                        <p>No inquiries match your search filter.</p>
                      )}
                    </div>
                  ) : (
                    filteredInquiries.map((inq) => {
                      const isSelected = selectedInquiry?.id === inq.id;
                      return (
                        <div
                          key={inq.id}
                          onClick={() => setSelectedInquiry(inq)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#181320] border-[#714B67] shadow-md'
                              : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-white">{inq.name || 'Unnamed Client'}</span>
                                <span
                                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                    inq.status === 'new'
                                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                      : inq.status === 'contacted'
                                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                  }`}
                                >
                                  {inq.status}
                                </span>
                              </div>
                              <p className="text-xs text-[#00A09D] font-medium">{inq.service}</p>
                            </div>

                            <span className="text-[11px] text-white/40 shrink-0 flex items-center gap-1 font-mono">
                              <Clock className="w-3 h-3" />
                              {new Date(inq.createdAt).toLocaleDateString()}
                            </span>
                          </div>

                          <p className="text-xs text-white/70 line-clamp-2">
                            {inq.message || inq.scope || 'No details provided.'}
                          </p>

                          <div className="flex items-center gap-3 mt-2.5 pt-2 border-t border-white/5 text-[11px] text-white/50">
                            <span>📞 {inq.phone || 'No phone'}</span>
                            <span>✉️ {inq.email || 'No email'}</span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Detail Pane (Selected inquiry) */}
                <div className="lg:w-96 p-5 overflow-y-auto bg-[#0d0f16] flex flex-col justify-between">
                  {selectedInquiry ? (
                    <div className="space-y-4">
                      <div className="flex items-start justify-between pb-3 border-b border-white/10">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A09D] block mb-0.5">
                            {selectedInquiry.type === 'contact_form' ? 'Contact Form Submission' : 'Consultation Discovery'}
                          </span>
                          <h4 className="font-display font-bold text-lg text-white">{selectedInquiry.name}</h4>
                          <span className="text-[11px] text-white/40 font-mono">
                            {new Date(selectedInquiry.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <button
                          onClick={() => handleDelete(selectedInquiry.id)}
                          className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Contact Channels */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 block">
                          Direct Follow-up Actions
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {selectedInquiry.phone && (
                            <a
                              href={`tel:${selectedInquiry.phone}`}
                              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex flex-col items-center justify-center gap-1 text-center transition-colors"
                            >
                              <Phone className="w-4 h-4 text-[#00A09D]" />
                              <span>Call</span>
                            </a>
                          )}
                          {selectedInquiry.phone && (
                            <a
                              href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(selectedInquiry.name)}%2C%20this%20is%20Apex%20Tech%20following%20up%20on%20your%20inquiry.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 text-xs font-semibold flex flex-col items-center justify-center gap-1 text-center transition-colors border border-[#25D366]/30"
                            >
                              <MessageSquare className="w-4 h-4 text-[#25D366]" />
                              <span>WhatsApp</span>
                            </a>
                          )}
                          {selectedInquiry.email && (
                            <a
                              href={`mailto:${selectedInquiry.email}?subject=Apex%20Tech%20Project%20Discussion`}
                              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex flex-col items-center justify-center gap-1 text-center transition-colors"
                            >
                              <Mail className="w-4 h-4 text-[#9B6C8F]" />
                              <span>Email</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Lead Details */}
                      <div className="space-y-3 pt-2">
                        <div>
                          <span className="text-[11px] text-white/50 block">Interested Service</span>
                          <span className="text-xs font-semibold text-white">{selectedInquiry.service}</span>
                        </div>

                        {selectedInquiry.scope && (
                          <div>
                            <span className="text-[11px] text-white/50 block">Scope / Timeline</span>
                            <span className="text-xs font-semibold text-white">{selectedInquiry.scope}</span>
                          </div>
                        )}

                        <div>
                          <span className="text-[11px] text-white/50 block">Message / Requirements</span>
                          <p className="text-xs bg-white/5 p-3 rounded-xl border border-white/10 text-white/90 whitespace-pre-wrap mt-1">
                            {selectedInquiry.message || 'No written message.'}
                          </p>
                        </div>
                      </div>

                      {/* Status Selector */}
                      <div className="pt-2 border-t border-white/10">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1.5">
                          Update Lead Status
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {(['new', 'contacted', 'closed'] as const).map((st) => (
                            <button
                              key={st}
                              onClick={() => handleStatusChange(selectedInquiry.id, st)}
                              className={`py-1.5 px-2 rounded-lg text-xs font-bold capitalize border transition-all ${
                                selectedInquiry.status === st
                                  ? 'bg-[#714B67] text-white border-[#714B67]'
                                  : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                              }`}
                            >
                              {st}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-20 text-white/40 text-xs my-auto">
                      <Eye className="w-8 h-8 mx-auto mb-2 text-white/20" />
                      <p>Select an inquiry from the list to view full client details and follow up directly.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
