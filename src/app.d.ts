declare global {
  namespace App {
    interface PageData {
      title: string;
      subtitle: string;
      description: string;
      robots: string;
      canonical: string;
    }
  }
}

export {};
