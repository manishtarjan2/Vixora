"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from './UploadForm.module.css';

export default function UploadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Only accept video files
    if (file.type.startsWith('video/')) {
      setFile(file);
      // Auto-fill title with filename (without extension)
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    } else {
      setError("Please select a valid video file.");
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const simulateUpload = () => {
    return new Promise<void>((resolve) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 15;
        if (currentProgress > 95) {
          setProgress(100);
          clearInterval(interval);
          resolve();
        } else {
          setProgress(Math.floor(currentProgress));
        }
      }, 300);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return;

    setIsUploading(true);
    setError(null);

    try {
      // 1. Simulate the upload progress bar
      await simulateUpload();

      // 2. Submit data to our API
      // We pass the filename so the API knows what to call the demo video
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          filename: file.name
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload video');
      }

      setUploadSuccess(true);
      
    } catch (err) {
      console.error(err);
      setError('An error occurred during upload. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  if (uploadSuccess) {
    return (
      <div className={styles.uploadCard}>
        <div className={styles.successContainer}>
          <svg className={styles.successIcon} viewBox="0 0 24 24" width="80" height="80"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 className={styles.successTitle}>Upload Complete!</h2>
          <p className={styles.successSubtext}>Your video has been published successfully.</p>
          <Link href="/" className={styles.homeButton}>
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.uploadCard}>
      <h2 className={styles.title}>Upload Video</h2>
      
      {error && <div style={{ color: 'var(--accent-red)', marginBottom: '16px' }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        {!file ? (
          <div 
            className={`${styles.dropZone} ${dragActive ? styles.dragActive : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={onButtonClick}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <svg className={styles.uploadIcon} viewBox="0 0 24 24" width="48" height="48"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
            <p className={styles.dropText}>Drag and drop a video file here</p>
            <p className={styles.dropSubtext}>or click to select file</p>
          </div>
        ) : (
          <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontWeight: '500', color: 'white' }}>Selected File: </span>
              <span style={{ color: 'var(--text-secondary)' }}>{file.name}</span>
            </div>
            <button 
              type="button" 
              onClick={() => setFile(null)}
              style={{ color: 'var(--accent-red)', fontSize: '14px', fontWeight: '500' }}
              disabled={isUploading}
            >
              Remove
            </button>
          </div>
        )}

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="title">Title (required)</label>
          <input 
            type="text" 
            id="title" 
            className={styles.input} 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a title that describes your video"
            required
            disabled={isUploading}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="description">Description</label>
          <textarea 
            id="description" 
            className={styles.textarea} 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell your viewers about your video"
            disabled={isUploading}
          />
        </div>

        {isUploading ? (
          <div className={styles.progressContainer}>
            <div className={styles.progressTrack}>
              <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
            </div>
            <div className={styles.progressText}>Uploading {progress}%</div>
            <div className={styles.progressSubtext}>Please do not close this window</div>
          </div>
        ) : (
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={!file || !title}
          >
            Publish
          </button>
        )}
      </form>
    </div>
  );
}
