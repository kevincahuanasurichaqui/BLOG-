
using WebApplication1._03_Repositorio;
 
using WebApplication1.BDCRUD;

namespace WebApplication1._02_Logica
{
    public class ProductoLogica
    {
        ProductoRepositorio repo = new ProductoRepositorio();

        public List<Producto> getAll()
        {
            return repo.getAll();
        }
        public Producto getById(int id)
        {
            return repo.getById(id);
        }
        public Producto create(Producto request)
        { 
           return repo.create(request);
        }
        //update
        public Producto Upsdate(Producto request)
        {
            return repo.Upsdate(request);
        }

        public int delete(int id)
        {
            return repo.delete(id);
        }

        internal Producto update(Producto request)
        {
            throw new NotImplementedException();
        }
    }


}
