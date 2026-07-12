import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Trash, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

// Simple password lock
const ADMIN_PASSWORD = "mohsautomation"; // Hardcoded for simplicity as requested

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("trusted_by");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Welcome, Admin");
    } else {
      toast.error("Incorrect password");
    }
  };

  const tabs = [
    { id: "trusted_by", label: "Trusted By Logos" },
    { id: "testimonials", label: "Testimonials" },
    { id: "results", label: "Results/Case Studies" },
    { id: "demos", label: "Demos" },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-[5vw]">
        <form onSubmit={handleLogin} className="max-w-md w-full bg-card p-8 rounded-2xl border border-border shadow-xl">
          <h1 className="font-display text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 mb-6 focus:outline-none focus:border-primary"
          />
          <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-32 pb-20 px-[5vw]">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-card rounded-xl border border-border p-6 min-h-[400px]">
            {activeTab === "trusted_by" && <TrustedByAdmin />}
            {activeTab === "testimonials" && <TestimonialsAdmin />}
            {activeTab === "results" && <ResultsAdmin />}
            {activeTab === "demos" && <DemosAdmin />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;

// --- Admin Subcomponents ---

const TrustedByAdmin = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["trusted_by"],
    queryFn: async () => {
      const { data, error } = await supabase.from("trusted_by").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const handleAdd = async () => {
    const name = window.prompt("Enter company name:");
    if (!name) return;
    
    toast.promise(supabase.from("trusted_by").insert({ name }).then(r => { if (r.error) throw r.error; }), {
      loading: "Adding...",
      success: () => { queryClient.invalidateQueries({ queryKey: ["trusted_by"] }); return "Added successfully"; },
      error: "Failed to add",
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this logo?")) return;
    toast.promise(supabase.from("trusted_by").delete().eq("id", id).then(r => { if (r.error) throw r.error; }), {
      loading: "Deleting...",
      success: () => { queryClient.invalidateQueries({ queryKey: ["trusted_by"] }); return "Deleted successfully"; },
      error: "Failed to delete",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Trusted By Logos</h2>
        <button onClick={handleAdd} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Add Logo
        </button>
      </div>
      {isLoading ? <Loader2 className="animate-spin mx-auto my-10" /> : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border"><th className="pb-3 font-semibold text-muted-foreground">Name</th><th className="pb-3 font-semibold text-muted-foreground w-20">Actions</th></tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id} className="border-b border-border/50">
                <td className="py-3">{item.name}</td>
                <td className="py-3">
                  <button onClick={() => handleDelete(item.id)} className="text-destructive p-2 hover:bg-destructive/10 rounded transition-colors"><Trash size={16} /></button>
                </td>
              </tr>
            ))}
            {data?.length === 0 && <tr><td colSpan={2} className="py-4 text-center text-muted-foreground">No logos added yet.</td></tr>}
          </tbody>
        </table>
      )}
    </div>
  );
};

const TestimonialsAdmin = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const handleAdd = async () => {
    const name = window.prompt("Author Name:");
    if (!name) return;
    const role = window.prompt("Role:");
    const org = window.prompt("Organization:");
    const quote = window.prompt("Quote:");
    if (!quote) return;
    
    toast.promise(supabase.from("testimonials").insert({ name, role, org, quote }).then(r => { if (r.error) throw r.error; }), {
      loading: "Adding...",
      success: () => { queryClient.invalidateQueries({ queryKey: ["testimonials"] }); return "Added successfully"; },
      error: "Failed to add",
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure?")) return;
    toast.promise(supabase.from("testimonials").delete().eq("id", id).then(r => { if (r.error) throw r.error; }), {
      loading: "Deleting...",
      success: () => { queryClient.invalidateQueries({ queryKey: ["testimonials"] }); return "Deleted successfully"; },
      error: "Failed to delete",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Testimonials</h2>
        <button onClick={handleAdd} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Add Testimonial
        </button>
      </div>
      {isLoading ? <Loader2 className="animate-spin mx-auto my-10" /> : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 font-semibold text-muted-foreground w-1/4">Name / Role</th>
              <th className="pb-3 font-semibold text-muted-foreground w-2/3">Quote</th>
              <th className="pb-3 font-semibold text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id} className="border-b border-border/50">
                <td className="py-3 align-top">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.role} · {item.org}</div>
                </td>
                <td className="py-3 align-top text-sm">{item.quote}</td>
                <td className="py-3 align-top">
                  <button onClick={() => handleDelete(item.id)} className="text-destructive p-2 hover:bg-destructive/10 rounded transition-colors"><Trash size={16} /></button>
                </td>
              </tr>
            ))}
            {data?.length === 0 && <tr><td colSpan={3} className="py-4 text-center text-muted-foreground">No testimonials added yet.</td></tr>}
          </tbody>
        </table>
      )}
    </div>
  );
};

const ResultsAdmin = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["results"],
    queryFn: async () => {
      const { data, error } = await supabase.from("results").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const handleAdd = async () => {
    const title = window.prompt("Case Study Title:");
    if (!title) return;
    const sector = window.prompt("Sector (e.g. Healthcare):") || "";
    const icon = window.prompt("Lucide Icon Name (e.g. Clock, TrendingUp):") || "CheckCircle";
    const body = window.prompt("Description:") || "";
    const m1val = window.prompt("Metric 1 Value (e.g. 68%):") || "";
    const m1lab = window.prompt("Metric 1 Label (e.g. Faster intake):") || "";
    const m2val = window.prompt("Metric 2 Value (e.g. 24/7):") || "";
    const m2lab = window.prompt("Metric 2 Label (e.g. Coverage):") || "";
    
    toast.promise(supabase.from("results").insert({ 
      title, sector, icon, body, metric_1_value: m1val, metric_1_label: m1lab, metric_2_value: m2val, metric_2_label: m2lab 
    }).then(r => { if (r.error) throw r.error; }), {
      loading: "Adding...",
      success: () => { queryClient.invalidateQueries({ queryKey: ["results"] }); return "Added successfully"; },
      error: "Failed to add",
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure?")) return;
    toast.promise(supabase.from("results").delete().eq("id", id).then(r => { if (r.error) throw r.error; }), {
      loading: "Deleting...",
      success: () => { queryClient.invalidateQueries({ queryKey: ["results"] }); return "Deleted successfully"; },
      error: "Failed to delete",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Results & Case Studies</h2>
        <button onClick={handleAdd} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Add Result
        </button>
      </div>
      {isLoading ? <Loader2 className="animate-spin mx-auto my-10" /> : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 font-semibold text-muted-foreground w-1/4">Title / Sector</th>
              <th className="pb-3 font-semibold text-muted-foreground w-1/2">Metrics</th>
              <th className="pb-3 font-semibold text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id} className="border-b border-border/50">
                <td className="py-3 align-top">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.sector} ({item.icon})</div>
                </td>
                <td className="py-3 align-top text-sm">
                  <div><strong>{item.metric_1_value}</strong> {item.metric_1_label}</div>
                  <div><strong>{item.metric_2_value}</strong> {item.metric_2_label}</div>
                </td>
                <td className="py-3 align-top">
                  <button onClick={() => handleDelete(item.id)} className="text-destructive p-2 hover:bg-destructive/10 rounded transition-colors"><Trash size={16} /></button>
                </td>
              </tr>
            ))}
            {data?.length === 0 && <tr><td colSpan={3} className="py-4 text-center text-muted-foreground">No results added yet.</td></tr>}
          </tbody>
        </table>
      )}
    </div>
  );
};

const DemosAdmin = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["demos"],
    queryFn: async () => {
      const { data, error } = await supabase.from("demos").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const handleAdd = async () => {
    const title = window.prompt("Demo Title:");
    if (!title) return;
    const description = window.prompt("Description:") || "";
    const category = window.prompt("Category (e.g. All Demos):") || "All Demos";
    const isInsta = window.confirm("Is this an Instagram Demo? (Cancel for YouTube)");
    let youtube_id = null;
    let instagram_id = null;
    if (isInsta) {
      instagram_id = window.prompt("Instagram ID (Shortcode):");
    } else {
      youtube_id = window.prompt("YouTube Video ID:");
    }
    const orientation = window.prompt("Orientation (portrait/landscape):") || "portrait";
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    
    toast.promise(supabase.from("demos").insert({ 
      id, title, description, category, youtube_id, instagram_id, orientation
    }).then(r => { if (r.error) throw r.error; }), {
      loading: "Adding...",
      success: () => { queryClient.invalidateQueries({ queryKey: ["demos"] }); return "Added successfully"; },
      error: "Failed to add",
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure?")) return;
    toast.promise(supabase.from("demos").delete().eq("id", id).then(r => { if (r.error) throw r.error; }), {
      loading: "Deleting...",
      success: () => { queryClient.invalidateQueries({ queryKey: ["demos"] }); return "Deleted successfully"; },
      error: "Failed to delete",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Demos</h2>
        <button onClick={handleAdd} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Add Demo
        </button>
      </div>
      {isLoading ? <Loader2 className="animate-spin mx-auto my-10" /> : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 font-semibold text-muted-foreground w-1/4">Title / Category</th>
              <th className="pb-3 font-semibold text-muted-foreground w-1/2">Video ID</th>
              <th className="pb-3 font-semibold text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id} className="border-b border-border/50">
                <td className="py-3 align-top">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.category}</div>
                </td>
                <td className="py-3 align-top text-sm">
                  {item.youtube_id && <div>YouTube: {item.youtube_id}</div>}
                  {item.instagram_id && <div>Instagram: {item.instagram_id}</div>}
                  <div className="text-muted-foreground text-xs">{item.orientation}</div>
                </td>
                <td className="py-3 align-top">
                  <button onClick={() => handleDelete(item.id)} className="text-destructive p-2 hover:bg-destructive/10 rounded transition-colors"><Trash size={16} /></button>
                </td>
              </tr>
            ))}
            {data?.length === 0 && <tr><td colSpan={3} className="py-4 text-center text-muted-foreground">No demos added yet.</td></tr>}
          </tbody>
        </table>
      )}
    </div>
  );
};
