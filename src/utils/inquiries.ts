import { Inquiry } from '../types';

const STORAGE_KEY = 'apex_tech_inquiries_v1';

export function getInquiries(): Inquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse inquiries from localStorage:', err);
    return [];
  }
}

export function saveInquiry(data: {
  type: 'contact_form' | 'consultation_modal';
  name: string;
  email: string;
  phone: string;
  service: string;
  scope?: string;
  message?: string;
}): Inquiry {
  const inquiries = getInquiries();
  const newInquiry: Inquiry = {
    id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    ...data,
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  inquiries.unshift(newInquiry);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
  } catch (err) {
    console.error('Failed to save inquiry to localStorage:', err);
  }

  return newInquiry;
}

export function updateInquiryStatus(id: string, status: Inquiry['status']): Inquiry[] {
  const inquiries = getInquiries().map((inq) =>
    inq.id === id ? { ...inq, status } : inq
  );
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
  } catch (err) {
    console.error('Failed to update inquiry status in localStorage:', err);
  }
  return inquiries;
}

export function deleteInquiry(id: string): Inquiry[] {
  const inquiries = getInquiries().filter((inq) => inq.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
  } catch (err) {
    console.error('Failed to delete inquiry from localStorage:', err);
  }
  return inquiries;
}

export function clearAllInquiries(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear inquiries from localStorage:', err);
  }
}

export function exportInquiriesCSV(): void {
  const inquiries = getInquiries();
  if (inquiries.length === 0) return;

  const headers = ['ID', 'Date', 'Type', 'Name', 'Email', 'Phone', 'Service', 'Scope', 'Message', 'Status'];
  const rows = inquiries.map((inq) => [
    `"${inq.id}"`,
    `"${new Date(inq.createdAt).toLocaleString()}"`,
    `"${inq.type}"`,
    `"${(inq.name || '').replace(/"/g, '""')}"`,
    `"${(inq.email || '').replace(/"/g, '""')}"`,
    `"${(inq.phone || '').replace(/"/g, '""')}"`,
    `"${(inq.service || '').replace(/"/g, '""')}"`,
    `"${(inq.scope || '').replace(/"/g, '""')}"`,
    `"${(inq.message || '').replace(/"/g, '""')}"`,
    `"${inq.status}"`,
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `apex_tech_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
