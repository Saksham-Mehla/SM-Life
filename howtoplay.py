from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)


bp = Blueprint('howtoplay', __name__)

@bp.route('/howtoplay')
def howtoplay():
    return render_template('howtoplay.html', title="LifebySM")