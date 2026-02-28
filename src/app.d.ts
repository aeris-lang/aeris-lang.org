declare global {
  namespace App {
    interface PageData {
      siteName: string;
      title: string;
      subtitle: string;
      description: string;
      robots: string;
      canonical: string;
    }
  }
}

export {};
