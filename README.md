# Campaign Streaming Insights

A Next.js application that displays real-time campaign analytics with streaming data visualization.

## Features

- **Real-time Streaming**: Live campaign metrics updated every 5 seconds
- **Interactive Dashboard**: Campaign overview with action buttons
- **Responsive Design**: Works on desktop and mobile devices
- **Live Charts**: Performance visualization with line charts

## Pages

### Dashboard (`/dashboard`)
- Campaign overview table
- Links to insights, details, and streaming pages

### Campaign Streaming (`/campaigns/[id]/insights/stream`)
- Real-time streaming campaign metrics
- Live KPI cards (Impressions, Clicks, Spend)
- Performance charts over time

## API Integration

- **Base URL**: `https://mixo-fe-backend-task.vercel.app`
- **Streaming endpoint**: `/campaigns/{id}/insights/stream`
- **Response format**: JSON objects with campaign metrics

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (for data visualization)
- Server-Sent Events for streaming

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/(pages)/
│   ├── dashboard/
│   └── campaigns/[id]/insights/stream/
├── components/
│   ├── campaign-stream/CampaignStream.tsx
│   ├── MetricCard.tsx
│   └── dashboard/CampaignDataTable.tsx
├── server-actions/server.ts
└── app/interface/index.ts
```

## Usage

1. Navigate to `/dashboard` to see all campaigns
2. Click "Stream" button for any campaign
3. View real-time streaming metrics and charts
4. Data updates automatically every 5 seconds