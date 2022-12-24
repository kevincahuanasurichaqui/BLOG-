import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


  productos: Producto[] = [];
  accion: string = "lista";
  myForm: FormGroup;
  productoSeleccionado: Producto = new Producto();


  constructor(
    private _productoService: ProductoService,
    private fb: FormBuilder,
  ) {
    this.myForm = this.fb.group({
      id: [{ value: 0, disabled: true }, [Validators.required]],
      categoria: [null, []],
      nombre: [null, []],
      stock: [null, []],
      fechaVencimiento: [null, []],
      costoSinIgv: [null, []],
      costoConIgv: [null, []],
    });
  }

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos() {
    this._productoService.getAll().subscribe(
      (data: Producto[]) => {
        this.productos = data;
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("termino");

      }
    );
  }

  eliminar(obj: Producto) {
    this._productoService.delete(obj.id).subscribe(
      (data: number) => {
        alert("registro eliminado de forma satisfactoria");
        this.getAllProductos();
      },
      err => {
        console.log(err);

      }
    );
  }

  btnCrear() {
    this.productoSeleccionado = new Producto();
    this.asignarValoresAlFormulario();
    setTimeout(() => {
      this.accion = "registro";
    }, 100);
  }

  btnEditar(obj: Producto) {
    this.productoSeleccionado = obj;
    this.asignarValoresAlFormulario();
    setTimeout(() => {
      this.accion = "registro";
    }, 100);
  }

  asignarValoresAlFormulario() {
    this.myForm.patchValue(this.productoSeleccionado);
  }


  crear(obj: Producto) {
    this._productoService.create(obj).subscribe(
      (data: Producto) => {
        alert("registro creado");
        this.getAllProductos();
      }
    );
  }

  editar(obj: Producto) {
    this._productoService.update(obj).subscribe(
      (data: Producto) => {
        alert("registro actualizado");
        this.getAllProductos();
      }
    );
  }

  btnGuardar() {
    this.productoSeleccionado = this.myForm.getRawValue();

    if(this.productoSeleccionado.id == 0) {
      this.crear(this.productoSeleccionado);
    }
    else {
      this.editar(this.productoSeleccionado);
    }

    this.despuesDeGuardar();
  }


  despuesDeGuardar() {
    this.accion = "lista";
  }


}
