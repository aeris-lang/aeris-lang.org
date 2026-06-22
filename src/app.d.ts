declare global {
  namespace App {
    interface PageData {
      site_name: string;
      title: string;
      subtitle: string;
      description: string;
      robots: string;
      canonical: string;
    }
  }
}

export {};
