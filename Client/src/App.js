import "./App.css";
import React from "react";
import $ from "jquery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./layouts/Register";
import Login from "./layouts/Login";
import LandingPage from "./layouts/LandingPage";
import DashboardUser from "./layouts/CariMobilUser";
import HasilPencarianUser from "./layouts/HasilPencarianUser";
import DetailPaketUser from "./layouts/DetailPaketUser";
import DashboardAdmin from "./layouts/DashboardAdmin";
import ListCarAdmin from "./layouts/ListCarAdmin";
import AddNewCarAdmin from "./layouts/AddNewCarAdmin";

import "./stylesheets/bootstrap.min.css";
import "./stylesheets/styleUser.css";
import "./stylesheets/styleAuth.css";
import "./stylesheets/style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

class App extends React.Component {
  componentDidMount() {
    // Scrolling
    $("#ourservice").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#service").offset().top - 70,
        },
        1000
      );
    });

    $("#whyus").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#us").offset().top - 70,
        },
        1000
      );
    });

    $("#testimonial").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#test").offset().top - 70,
        },
        1000
      );
    });

    $("#faq").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#fq").offset().top - 70,
        },
        1000
      );
    });

    // Background tranparan
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".fixed-top").css("background", "transparent");
      } else {
        $(".fixed-top").css("background", "#F1F3FF");
      }
    });

    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $("#sidebarCollapse").on("click", function () {
        // eslint-disable-next-line no-undef
        $("#sidebar").toggleClass("active");
      });

      // script untuk data table pada dashboard admin
      // eslint-disable-next-line no-undef
      $("#topTable").DataTable({
        paging: false,
        ordering: true,
        info: false,
        searching: false,
      });

      // eslint-disable-next-line no-undef
      $("#botTable").DataTable({
        paging: false,
        ordering: true,
        info: false,
        searching: false,
      });

      // script untuk file add-new-car
      // eslint-disable-next-line no-undef
      $("#files").click(function () {
        // eslint-disable-next-line no-undef
        $("input[type='file']").trigger("click");
      });

      // eslint-disable-next-line no-undef
      $('input[type="file"]').on("change", function () {
        // eslint-disable-next-line no-undef
        var val = $(this).val();
        // eslint-disable-next-line no-undef
        $(this).siblings("span").text(val);
      });

      // Box Form
      //run when the DOM is ready
      $(".clickable").click(function () {
        //use a class, since your ID gets mangled
        $(".custom-body").addClass("custom-bg-active"); //add the class to the clicked element
      });
      //run when the DOM is ready
      $(".unclickable").click(function () {
        //use a class, since your ID gets mangled
        $(".custom-body").removeClass("custom-bg-active"); //add the class to the clicked element
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/dasboard-user"} element={<DashboardUser />} />
          <Route path={"/hasil-pencarian-user/:tipe"} element={<HasilPencarianUser />} />
          <Route path={"/detail-paket-user/:id"} element={<DetailPaketUser />} />
          <Route path={"/dashboard-admin"} element={<DashboardAdmin />} />
          <Route path={"/list-car-admin"} element={<ListCarAdmin />} />
          <Route path={"/add-new-car-admin"} element={<AddNewCarAdmin />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
