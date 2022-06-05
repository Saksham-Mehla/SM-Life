from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)


bp = Blueprint('practice', __name__)

@bp.route('/practice')
def practice():
    return render_template('practice.html', title="LifebyConway")