using WebApplication1.BDCRUD;

namespace WebApplication1._03_Repositorio
{
    public class ProductoRepositorio
    {
        _DbContextCrud db = new _DbContextCrud();


        public List<Producto> getAll()
        {

            return db.Productos.ToList();
        }
        public Producto getById(int id)
        {

            return db.Productos.Find(id);
        }
       public Producto create(Producto request)
        {
            db.Productos.Add(request);
            db.SaveChanges();
            return request;
        }
        //update
        public Producto Upsdate(Producto request)
        {
            db.Productos.Update(request);
            db.SaveChanges();
            return request;
        }

        public int delete(int id)
        {
            Producto producto = db.Productos.Find(id);
           
            db.Productos.Remove(producto);
            return db.SaveChanges(); 
        } 

    }

}