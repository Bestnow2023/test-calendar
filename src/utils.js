import sampleData from './data/events.json';

const AMOCK_API_URL = 'https://amock.io/api/psgamevent';

export const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const fetchEvents = async () => {
  try {
    const response = await fetch(AMOCK_API_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch events. HTTP status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    return sampleData;
  }
};

export const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return 'th';
  
  switch (day % 10) {
    case 1:  return 'st';
    case 2:  return 'nd';
    case 3:  return 'rd';
    default: return 'th';
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);

  // Format the date as "Month Dayth"
  const monthDay = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date) + ` ${day}${ordinalSuffix}`;

  // Get the year
  const year = date.getFullYear();

  return `${monthDay} ${year}`;
};

export const imageLoader = (imageContext, filename) => {
  try {
    return imageContext(`./${filename}.webp`);
  } catch (webpError) {
    try {
      return imageContext(`./${filename}.jpeg`);
    } catch (jpegError) {
      console.error(`Could not find image: ./${filename}`);
      return ''; // Fallback image path ?
    }
  }
};
