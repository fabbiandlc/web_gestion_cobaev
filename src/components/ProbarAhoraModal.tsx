
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ProbarAhoraModal = ({ buttonClassName = "" }: { buttonClassName?: string }) => {
  const [open, setOpen] = useState(false);
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!correo || !correo.match(/^[\w.-]+@[\w.-]+\.\w{2,}$/)) {
      setError("Por favor ingresa un correo válido.");
      return;
    }
    setEnviado(true);
    // Aquí se podría enviar el correo usando una API.
  };

  return (
    <>
      <Button
        size="lg"
        className={buttonClassName}
        onClick={() => setOpen(true)}
      >
        Probar ahora
      </Button>
      {open && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md animate-fade-in">
            <button className="absolute top-2 right-3 text-2xl text-muted-foreground" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
            <h3 className="text-xl font-bold mb-2 text-foreground">Solicita tu APK</h3>
            {!enviado ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-muted-foreground">Ingresa tu correo electrónico y te enviaremos el enlace para descargar la app móvil.</p>
                <input
                  type="email"
                  className="w-full border px-4 py-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  placeholder="Tu correo electrónico"
                  autoFocus
                  value={correo}
                  onChange={e => setCorreo(e.target.value)}
                  required
                />
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-3"
                >
                  Solicitar APK
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <p className="text-green-700 font-semibold mb-2">¡Gracias! Recibirás el enlace pronto en tu correo.</p>
                <Button className="mt-4" onClick={() => setOpen(false)}>Cerrar</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProbarAhoraModal;
